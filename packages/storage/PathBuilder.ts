import { join, posix } from 'path';

/**
 * Small helper for provider output paths and identifiers.
 *
 * @remarks
 * Path building is centralized so providers can describe logical media groups
 * without duplicating path separators, normalization, or filename conventions.
 *
 * Identifiers are POSIX-style logical keys built with {@link PathBuilder.join};
 * they are converted to platform paths only when {@link PathBuilder.buildDirectoryPath}
 * hands them to the filesystem, so provider code never deals with separators.
 */
export class PathBuilder {
	public buildDirectoryPath(filename: string, identifier?: string): string {
		if (identifier) return join(identifier, filename);

		return filename;
	}

	/**
	 * Joins logical identifier segments.
	 *
	 * @remarks
	 * Uses `path.posix` so the result normalizes consistently on every platform
	 * and empty segments collapse instead of producing doubled separators.
	 */
	public join(...segments: string[]): string {
		return posix.join(...segments.filter((segment) => segment && segment.length > 0));
	}

	public spaceNormalizer(input: string = 'unknown'): string {
		return input?.replace(/[^a-zA-Z0-9]/g, '_')?.trim();
	}
}
