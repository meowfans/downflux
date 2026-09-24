import { BaseProvider, DefaultMethods } from '@base';
import { ExtractionTarget, Provider, providerPatterns } from '@types';
import { type AnyProvider } from '@contracts';
import { providerClasses } from '../resolver/ProviderClasses';
import { type DefaultExecArgs } from './DefaultContracts';

/**
 * Default provider.
 * Supports generic URL extraction.
 */
export class DefaultProvider extends BaseProvider<DefaultExecArgs> {
	protected readonly provider = Provider.Default;

	constructor(url: string) {
		super(url, {
			provider: Provider.Default,
			urlPattern: providerPatterns[Provider.Default],
			metadata: {
				hasHls: true,
				type: 'adult',
				hasMp4: true,
				hasKvs: false,
				underGeoRestriction: false,
				requiresBrowser: false,
				canDownload: true,
				underDevelopment: true,
				cloudflareChallenge: false,
				sniSpoofing: 'untested'
			}
		});
	}

	/**
	 * Resolves a URL to the provider that claims its host.
	 *
	 * @remarks
	 * `providerPatterns` entries match a hostname, not a whole URL — they are the
	 * same anchored patterns each provider validates against — so the host has to be
	 * extracted first. Testing a full URL against them never matches.
	 *
	 * An unparseable URL resolves to `Default` rather than being matched loosely.
	 * Every provider constructor rejects a non-URL anyway, and failing through the
	 * default keeps the error about the URL instead of blaming a provider the caller
	 * never asked for.
	 */
	private static resolveProvider(url: string): Provider {
		let hostname: string;

		try {
			hostname = new URL(url).hostname;
		} catch {
			return Provider.Default;
		}

		for (const [provider, pattern] of Object.entries(providerPatterns)) {
			if (provider !== Provider.Default && pattern.test(hostname)) return provider as Provider;
		}

		return Provider.Default;
	}

	/**
	 * Builds the provider that handles a URL.
	 *
	 * @param url Page URL to resolve.
	 * @returns An instance of the matching provider, or a `DefaultProvider` when no
	 * provider claims the host.
	 *
	 * @example
	 * ```ts
	 * const provider = DefaultProvider.for('https://xhamster.com/videos/abc');
	 * ```
	 */
	public static for(url: string): AnyProvider {
		const ProviderClass = providerClasses[DefaultProvider.resolveProvider(url)];

		return ProviderClass ? new ProviderClass(url) : new DefaultProvider(url);
	}

	/**
	 * Gets links.
	 * @returns Extracted anchor result array
	 */
	public async getLinks(): Promise<string[]> {
		return await this.execute<string[]>({
			provider: this.provider,
			method: DefaultMethods.getLinks,
			extractionTarget: ExtractionTarget.ANCHORS,
			executionShape: 'multiple',
			targets: [this.url]
		});
	}

	/**
	 * Gets images.
	 * @returns Extracted image result array
	 */
	public async getImages(): Promise<string[]> {
		return await this.execute<string[]>({
			provider: this.provider,
			method: DefaultMethods.getImages,
			extractionTarget: ExtractionTarget.IMAGES,
			executionShape: 'multiple',
			targets: [this.url]
		});
	}

	/**
	 * Gets videos.
	 * @returns Extracted video result array
	 */
	public async getVideos(): Promise<string[]> {
		return await this.execute<string[]>({
			provider: this.provider,
			method: DefaultMethods.getVideos,
			extractionTarget: ExtractionTarget.SOURCES,
			executionShape: 'multiple',
			targets: [this.url]
		});
	}

	/**
	 * Gets audio.
	 * @returns Extracted audio result array
	 */
	public async getAudio(): Promise<string[]> {
		return await this.execute<string[]>({
			provider: this.provider,
			method: DefaultMethods.getAudio,
			extractionTarget: ExtractionTarget.SOURCES,
			executionShape: 'multiple',
			targets: [this.url]
		});
	}
}
