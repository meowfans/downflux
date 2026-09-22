import { TerminalSurface } from './TerminalSurface';

/**
 * Per-job handle onto the shared terminal region.
 *
 * @remarks
 * Rendering state lives in {@link TerminalSurface} because only one component in
 * a process may move the cursor. Each job owns a slice of the live region, so
 * concurrent jobs stack instead of erasing one another.
 */
export class LogManager {
	private readonly owner = Symbol('downflux:job');

	/**
	 * Prints the banner and the job's current block.
	 *
	 * @param lines Block body, already styled.
	 * @param options `captureConsole` routes foreign `console` output around the live region.
	 */
	public renderBlock(lines: string[], options: { captureConsole?: boolean } = {}): void {
		TerminalSurface.instance.setBlock(this.owner, lines, options);
	}

	/**
	 * Writes a permanent line above the live region.
	 *
	 * @remarks
	 * Use this instead of `console.log` while a job is rendering: direct writes
	 * land inside the region the next frame rewinds over, and are lost.
	 */
	public log(line: string): void {
		TerminalSurface.instance.persist(line);
	}

	/** Freezes this job's final block and restores the terminal when it is the last one. */
	public destroy(): void {
		TerminalSurface.instance.releaseBlock(this.owner);
	}
}
