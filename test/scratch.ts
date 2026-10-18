import path from 'node:path';

interface M3U8Variant {
	url: string;
	bandwidth: string;
	resolution: string;
	codecs: string;
	quality: string;
}

class Scratch {
	private url: string;
	private static EXTERNAL_API_URL = 'https://store.externulls.com/video/play_url';
	private static APPLICATION_VND_URL = 'https://video.beeg.com';

	constructor(url: string) {
		this.url = url;
	}

	private get getVideoId(): string {
		const matched = this.url.match(/^https:\/\/(?:www\.)?beeg\.com\/-0([\d]+)/i);
		if (!matched) throw new Error(`Failed to extract video ID from ${this.url}`);
		return matched[1];
	}

	public async getText(): Promise<string> {
		console.log(`Fetching text for ${this.url}`);

		try {
			const res = await fetch(path.join(Scratch.EXTERNAL_API_URL, this.getVideoId), {
				method: 'GET',
				headers: {
					'User-Agent':
						'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
					'Accept': 'application/json, text/plain, */*',
					'Referer': 'https://beeg.com/',
					'Origin': 'https://beeg.com'
				}
			});
			if (!res.ok) throw new Error(`Failed to fetch ${this.url}: ${res.status} ${res.statusText}`);

			return await res.text();
		} catch (error) {
			throw new Error(`Error fetching ${this.url}: ${error}`);
		}
	}

	public async getManifest(): Promise<string> {
		console.log(`Fetching manifest for ${this.url}`);

		try {
			const text = await this.getText();

			console.log({ TEXT: text });
			const res = await fetch(path.join(Scratch.APPLICATION_VND_URL, text), {
				method: 'GET',
				headers: {
					'User-Agent':
						'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
					'Accept': 'application/json, text/plain, */*',
					'Referer': 'https://beeg.com/',
					'Origin': 'https://beeg.com',
					'Content-Type': 'application/vnd.apple.mpegurl'
				}
			});
			if (!res.ok) throw new Error(`Failed to fetch manifest for ${this.url}: ${res.status} ${res.statusText}`);

			return await res.text();
		} catch (error) {
			throw new Error(`Error fetching manifest for ${this.url}: ${error}`);
		}
	}

	public async getMasterPlaylist(): Promise<string> {
		console.log(`Fetching master playlist for ${this.url}`);
		try {
			const manifestText = await this.getManifest();
			return manifestText;
		} catch (error) {
			throw new Error(`Error fetching master playlist for ${this.url}: ${error}`);
		}
	}

	public async getPlaylist(): Promise<M3U8Variant[]> {
		console.log(`Fetching playlist for ${this.url}`);

		const manifest = await this.getMasterPlaylist();

		const lines = manifest.split('\n').map((l) => l.trim());
		const variants: M3U8Variant[] = [];

		for (let i = 0; i < lines.length; i++) {
			const line = lines[i];

			if (!line.includes('#EXT-X-STREAM-INF')) continue;

			const bw = parseInt(line.match(/BANDWIDTH=(\d+)/)?.[1] || '0', 10);

			const resMatch = line.match(/RESOLUTION=(\d+)x(\d+)/);
			const width = resMatch ? parseInt(resMatch[1], 10) : 0;
			const height = resMatch ? parseInt(resMatch[2], 10) : 0;

			const uri = this.findVariantUri(lines, i + 1);

			if (uri) {
				variants.push({
					url: new URL(uri, Scratch.APPLICATION_VND_URL).toString(),
					bandwidth: bw.toString(),
					resolution: `${width}x${height}`,
					codecs: line.match(/CODECS="([^"]+)"/)?.[1] || '',
					quality: `${height}p`
				});
			}
		}
		return variants;
	}

	private findVariantUri(lines: string[], fromIndex: number): string | null {
		for (let i = fromIndex; i < lines.length; i++) {
			const line = lines[i];

			if (!line) continue;

			if (line.startsWith('#EXT-X-STREAM-INF')) return null;

			if (!line.startsWith('#')) return line;
		}

		return null;
	}

	public async getVideoSegments(quality: '240p' | '480p' | '720p' | '1080p', shouldDownload: boolean = false): Promise<string[]> {
		console.log(`Fetching video segments for quality: ${quality}`);

		const variants = await this.getPlaylist();

		const variant = variants.find((v) => v.quality === quality);
		if (!variant) throw new Error(`No variant found for quality ${quality}`);

		try {
			const response = await fetch(variant.url, {
				method: 'GET',
				headers: {
					'User-Agent':
						'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
					'Accept': 'application/json, text/plain, */*',
					'Referer': 'https://beeg.com/',
					'Origin': 'https://beeg.com',
					'Content-Type': 'application/vnd.apple.mpegurl'
				}
			});

			if (!response.ok) throw new Error(`Failed to fetch segments for ${quality}: ${response.status} ${response.statusText}`);

			const segmentsText = await response.text();

			return this.getSegments(segmentsText, variant.url);
		} catch (error) {
			console.error(`Error fetching segments for ${quality}:`, error);
			return [];
		}
	}

	public async downloadSegments(url: string, outputDir: string): Promise<void> {
		console.log(`Downloading segments from ${url} to ${outputDir}`);

		try {
			const response = await fetch(url, {
				method: 'GET',
				headers: {
					'User-Agent':
						'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
					'Accept': 'application/json, text/plain, */*',
					'Referer': 'https://beeg.com/',
					'Origin': 'https://beeg.com',
					'Content-Type': 'application/vnd.apple.mpegurl'
				}
			});
		} catch (error) {}
	}

	private getSegments(text: string, playlistUrl: string): string[] {
		const urls = text
			.split('\n')
			.map((line) => line.trim())
			.filter((line) => line && !line.startsWith('#'))
			.map((line) => new URL(line, playlistUrl).toString());

		console.log(`Found ${urls.length} segment URLs in the playlist.`);

		return urls;
	}
}

async function runScratch() {
	const scratch = new Scratch('https://beeg.com/-0482442898137122');
	try {
		const urls = await scratch.getVideoSegments('720p');
		console.log('Fetched urls:', urls);
	} catch (error) {
		console.error('Error:', error);
	}
}

runScratch();
