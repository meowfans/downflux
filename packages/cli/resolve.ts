import type { AnyProvider } from '@contracts';
import { Provider, providerPatterns } from '@types';
import * as providers from '../providers';

/**
 * Resolves a URL to the provider that claims its host.
 *
 * @remarks
 * `providerPatterns` entries match a hostname, not a whole URL, so the host has to
 * be extracted first. This lives in the CLI rather than the public API because a
 * URL is only known at runtime: a library caller already knows which provider they
 * want and can construct it directly, while the CLI is handed an arbitrary string.
 */
export const resolveProvider = (url: string): Provider => {
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
};

/**
 * Builds the provider for a URL.
 *
 * @remarks
 * Every `Provider` value is the exported class name — `Provider.PornHub` is
 * `'PornHubProvider'` — so the barrel doubles as the lookup and no table has to be
 * maintained alongside the enum.
 */
export const providerFor = (url: string): AnyProvider => {
	const provider = resolveProvider(url);
	const classes = providers as unknown as Record<string, new (target: string) => AnyProvider>;
	const ProviderClass = classes[provider] ?? classes[Provider.Default];

	return new ProviderClass(url);
};

/** Methods a provider might expose, in the order the CLI will try them. */
export const DOWNLOAD_METHODS = ['getVideo', 'getVideos', 'getImages', 'getMetadata', 'getLinks'] as const;

/**
 * Picks the method to invoke on a provider.
 *
 * @remarks
 * Providers do not share one entry point — 43 expose `getVideo`, a handful only
 * `getVideos` or `getMetadata` — so the CLI probes for the first it recognises
 * rather than assuming.
 */
export const methodFor = (provider: AnyProvider, requested?: string): string => {
	const candidates = requested ? [requested] : DOWNLOAD_METHODS;
	const found = candidates.find((name) => typeof (provider as unknown as Record<string, unknown>)[name] === 'function');

	if (!found) {
		throw new Error(
			requested
				? `${provider.constructor.name} has no method "${requested}"`
				: `${provider.constructor.name} exposes none of: ${DOWNLOAD_METHODS.join(', ')}`
		);
	}

	return found;
};
