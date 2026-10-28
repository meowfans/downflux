import { BaseStrategy } from '@base';
import { type DownloadOptions } from 'charanko';
import { VideoQuality } from '@types';
import { type PornHubMediaDefinition } from './PornHubContracts';

/**
 * Provides PornHub-specific HTTP behavior.
 *
 * @remarks
 * Strategies isolate host fallbacks, headers, and transport quirks from shared HTTP clients.
 */
export class PornHubStrategy extends BaseStrategy {
	private SUB_DOMAINS = [
		'pornhub.org',
		'de.pornhub.org',
		'pornhub.com',
		'es.pornhub.org',
		'fr.pornhub.org',
		'it.pornhub.org',
		'jp.pornhub.org',
		'nl.pornhub.org',
		'pl.pornhub.org'
	];

	public override candidateUrls(url: string): string[] {
		return super.candidateUrls(url, this.SUB_DOMAINS);
	}

	public override shouldFallbackOnNotFound(url: string) {
		return url.includes('phncdn.com');
	}

	public override fallbackUrl(url: string) {
		this.progress.message('[Switch CDN IF POSSIBLE]');

		if (url.includes('iv-h')) return url.replace('iv-h', 'ev-h');
		if (url.includes('ev-h')) return url.replace('ev-h', 'iv-h');
		return null;
	}

	public override shouldRefresh(url: string, status: number) {
		this.progress.message('CHECKING FOR RE-EXTRACTION');

		// signed phncdn playlists answer 404 once expired, on top of the default 403/410
		return super.shouldRefresh(url, status) || (status === 404 && url.includes('phncdn.com') && url.includes('.m3u8'));
	}

	public override shouldResolveTextResponse(url: string, contentType: string) {
		return (
			(url.includes('/get_file/') || url.includes('/get_media')) &&
			(contentType.includes('text/') || contentType.includes('application/json'))
		);
	}

	public override mediaUrlFromText(body: string, opts: DownloadOptions) {
		this.progress.message('GETTING DIRECT URL FROM TEXT');

		const normalized = body.replace(/\\\//g, '/').replace(/&amp;/g, '&');

		try {
			const definitions = JSON.parse(normalized) as PornHubMediaDefinition[];
			if (Array.isArray(definitions)) {
				this.progress.message('PARSED MEDIA DEFINITIONS');

				const mp4Definitions = definitions
					.filter((definition) => definition.format === 'mp4' && definition.videoUrl)
					.sort((a, b) => (b?.height || Number(b.quality ?? 0)) - (a?.height || Number(a.quality ?? 0)));

				const preferred = opts?.quality
					? mp4Definitions?.find((definition) => !!this.normalizeQuality(definition, opts?.quality))?.videoUrl
					: mp4Definitions[0]?.videoUrl;

				if (opts.dryRun) {
					this.progress.message(`NO DOWNLOAD MODE - SELECTED VIDEO URL: ${preferred} DEFINITION: ${mp4Definitions}`);
				}

				return preferred ?? null;
			}
		} catch {
			this.progress.message('FALLING BACK TO PREVIOUS URL');
		}

		const match = normalized.match(/https?:\/\/[^\s"'<>\\]+\.mp4(?:\?[^\s"'<>\\]*)?/i);
		return match?.[0] ?? null;
	}

	private normalizeQuality(definition: PornHubMediaDefinition, preferred?: string): boolean | undefined {
		const pq = preferred || VideoQuality.Q1080;
		if (definition.height) return `${definition.height}p` === pq;
		else if (definition.quality) return `${definition.quality}p` === pq;
	}
}
