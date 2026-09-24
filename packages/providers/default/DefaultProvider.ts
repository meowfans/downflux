import { BaseProvider, DefaultMethods } from '@base';
import { ProviderMismatchException } from '@core/exceptions';
import { ExtractionTarget, Provider, providerPatterns } from '@types';
import { providerClasses, type ResolvedProvider } from '../resolver/ProviderClasses';
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
	 * Builds the provider that handles a URL, checked against the one you expect.
	 *
	 * @param url Page URL to resolve.
	 * @param expected The provider the URL should belong to.
	 * @returns That provider, typed concretely.
	 * @throws ProviderMismatchException when the URL resolves to a different provider.
	 *
	 * @example
	 * ```ts
	 * await DefaultProvider.for(url, Provider.PornHub).setOutput(OutputType.DEVICE).getVideo(VideoQuality.Q1080);
	 * ```
	 */
	public static for<K extends keyof typeof providerClasses>(url: string, expected: K): InstanceType<(typeof providerClasses)[K]>;

	/**
	 * Builds the provider that handles a URL.
	 *
	 * @param url Page URL to resolve.
	 * @returns An instance of the matching provider, or a `DefaultProvider` when no
	 * provider claims the host.
	 *
	 * @remarks
	 * A URL is only known at runtime, so no signature can narrow a string to one
	 * class ahead of time. Without an expected provider the result is a union of
	 * every provider; narrow it with `instanceof` to reach a provider's own methods,
	 * or name the provider you want in the second argument to get it typed directly.
	 *
	 * @example
	 * ```ts
	 * const provider = DefaultProvider.for(url);
	 *
	 * if (provider instanceof PornHubProvider) await provider.getVideo(VideoQuality.Q1080);
	 * ```
	 */
	public static for(url: string): ResolvedProvider | DefaultProvider;

	public static for(url: string, expected?: Provider): ResolvedProvider | DefaultProvider {
		const resolved = DefaultProvider.resolveProvider(url);

		if (expected && resolved !== expected) {
			throw new ProviderMismatchException(url, expected, 'for', { resolved });
		}

		const ProviderClass = providerClasses[resolved as keyof typeof providerClasses];

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
