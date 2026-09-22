import { Brand } from '@shared';

/**
 * Process-wide owner of the live terminal region.
 *
 * @remarks
 * In-place rendering means exactly one component may move the cursor. Each
 * `LogManager` previously tracked its own line count against a shared stdout, so
 * two concurrent jobs erased each other's output and printed the banner twice.
 *
 * All live blocks are registered here instead and composed into a single region
 * that is erased and redrawn as a unit, which keeps concurrent jobs legible and
 * gives one place to push permanent lines through ({@link TerminalSurface.persist}).
 */
export class TerminalSurface {
	private static shared: TerminalSurface | null = null;

	public static get instance(): TerminalSurface {
		TerminalSurface.shared ??= new TerminalSurface();

		return TerminalSurface.shared;
	}

	/** Live blocks, keyed by owner; insertion order is render order. */
	private readonly blocks = new Map<symbol, string[]>();

	private liveLineCount = 0;
	private bannerShown = false;
	private cursorHidden = false;
	private redrawing = false;

	/** Set while the surface itself is writing, so interception does not recurse. */
	private internalWrite = false;

	private redrawQueued = false;

	private originalStdout: typeof process.stdout.write | null = null;
	private originalStderr: typeof process.stderr.write | null = null;

	/** The wrappers this surface installed, kept so restoration can verify ownership. */
	private wrapperStdout: typeof process.stdout.write | null = null;
	private wrapperStderr: typeof process.stderr.write | null = null;

	/** Set when a wrapper could not be removed and must pass through untouched. */
	private interceptionInert = false;

	/** Whether the cursor currently sits at column 0. */
	private atLineStart = true;

	private readonly onExit = (): void => this.release();

	private readonly onSignal = (): void => {
		this.release();
		process.exit(130);
	};

	private get isTTY(): boolean {
		return Boolean(process.stdout.isTTY);
	}

	private get width(): number {
		return Math.max(20, (process.stdout.columns || 80) - 1);
	}

	private get height(): number {
		return Math.max(4, process.stdout.rows || 24);
	}

	/** Truncates on visible width so ANSI codes are never counted or cut mid-sequence. */
	private truncate(line: string): string {
		if (Brand.width(line) <= this.width) return line;

		let visible = 0;
		let out = '';

		for (let i = 0; i < line.length; i++) {
			if (line[i] === '\x1B') {
				const end = line.indexOf('m', i);

				if (end !== -1) {
					out += line.slice(i, end + 1);
					i = end;
					continue;
				}
			}

			if (visible >= this.width - 1) break;

			out += line[i];
			visible++;
		}

		return `${out}…\x1B[0m`;
	}

	/** Every write the surface makes itself goes through here. */
	private emit(data: string): void {
		this.internalWrite = true;

		try {
			(this.originalStdout ?? process.stdout.write).call(process.stdout, data);

			this.trackColumn(data);
		} finally {
			this.internalWrite = false;
		}
	}

	/**
	 * Updates the cursor-column state from a chunk of output.
	 *
	 * @remarks
	 * Only printable content moves the column. Cursor-control writes such as the
	 * erase sequence carry no visible text, and treating them as output marked the
	 * cursor as mid-line, which made every redraw inject a newline the erase could
	 * not reclaim - one leaked blank line per frame.
	 */
	private trackColumn(data: string): void {
		// eslint-disable-next-line no-control-regex
		const visible = Brand.plain(data).replace(/\x1B\[[0-9;?]*[A-Za-z]/g, '');

		if (!visible.length) return;

		this.atLineStart = visible.endsWith('\n');
	}

	/** Whether a foreign chunk left the cursor at column 0. */
	private endsAtLineStart(chunk: unknown): boolean | null {
		if (typeof chunk === 'string') return chunk.length ? chunk.endsWith('\n') : null;

		if (chunk instanceof Uint8Array) return chunk.length ? chunk[chunk.length - 1] === 0x0a : null;

		return null;
	}

	/**
	 * Routes foreign console output around the live region.
	 *
	 * @remarks
	 * A `console.log` during a download lands inside the rows the next frame
	 * rewinds over, so the line disappears. Intercepting `stdout`/`stderr` lets the
	 * region be erased before foreign output and redrawn beneath it, which keeps
	 * consumer logging working without asking callers to change how they log.
	 * Both streams are patched because they share one cursor.
	 */
	private interceptConsole(): void {
		if (this.originalStdout || !this.isTTY) return;

		/**
		 * The originals are captured unbound so restoration puts back the exact
		 * function identity that was there before. Storing a bound copy would leave
		 * a wrapper behind on every cycle, and those would stack across jobs.
		 */
		const stdout = process.stdout.write;
		const stderr = process.stderr.write;

		this.originalStdout = stdout;
		this.originalStderr = stderr;

		const wrap =
			(original: typeof process.stdout.write, stream: NodeJS.WriteStream) =>
			(...args: Parameters<typeof process.stdout.write>): boolean => {
				if (this.internalWrite || this.interceptionInert) return original.apply(stream, args);

				this.erase();

				const result = original.apply(stream, args);

				// a chunk with no trailing newline leaves the cursor mid-line
				const lineState = this.endsAtLineStart(args[0]);

				if (lineState !== null) this.atLineStart = lineState;

				this.queueRedraw();

				return result;
			};

		this.wrapperStdout = wrap(stdout, process.stdout) as typeof process.stdout.write;
		this.wrapperStderr = wrap(stderr, process.stderr) as typeof process.stderr.write;

		process.stdout.write = this.wrapperStdout;
		process.stderr.write = this.wrapperStderr;
	}

	/**
	 * Uninstalls the console wrappers.
	 *
	 * @remarks
	 * Restoration is by assignment, which is only safe while this surface is still
	 * the outermost patch. If another library has patched on top, assigning the
	 * original back would silently delete *their* wrapper, so the wrapper is left
	 * in place and switched to pass-through instead. That leaks one function call
	 * per write, which is preferable to breaking an unrelated library.
	 */
	private restoreConsole(): void {
		const ownsStdout = this.wrapperStdout !== null && process.stdout.write === this.wrapperStdout;
		const ownsStderr = this.wrapperStderr !== null && process.stderr.write === this.wrapperStderr;

		if (ownsStdout && this.originalStdout) process.stdout.write = this.originalStdout;
		if (ownsStderr && this.originalStderr) process.stderr.write = this.originalStderr;

		// something patched on top of us, stay installed but stop acting
		this.interceptionInert = !(ownsStdout && ownsStderr);

		if (!this.interceptionInert) {
			this.wrapperStdout = null;
			this.wrapperStderr = null;
			this.originalStdout = null;
			this.originalStderr = null;
		}
	}

	/** Coalesces the redraws triggered by a burst of foreign writes into one. */
	private queueRedraw(): void {
		if (this.redrawQueued || !this.blocks.size) return;

		this.redrawQueued = true;

		setImmediate(() => {
			this.redrawQueued = false;
			this.redraw();
		});
	}

	private hideCursor(): void {
		if (!this.isTTY || this.cursorHidden) return;

		this.emit('\x1B[?25l');
		this.cursorHidden = true;

		process.once('exit', this.onExit);
		process.once('SIGINT', this.onSignal);
		process.once('SIGTERM', this.onSignal);
	}

	private erase(): void {
		if (!this.liveLineCount) return;

		this.emit(`\x1B[${this.liveLineCount}A\x1B[0J`);
		this.liveLineCount = 0;
	}

	private banner(): void {
		if (this.bannerShown) return;

		this.bannerShown = true;

		if (!this.isTTY) {
			this.emit(`${Brand.ICON} ${Brand.NAME} - ${Brand.TAGLINE}\n`);
			return;
		}

		this.emit(`\n${Brand.banner().join('\n')}\n\n`);
	}

	private redraw(): void {
		if (this.redrawing) return;

		this.redrawing = true;

		try {
			/**
			 * Clamped to the viewport. A block taller than the screen scrolls its own
			 * top rows away, and the next cursor-up can no longer reach them, which
			 * corrupts everything above the region.
			 */
			const body = [...this.blocks.values()]
				.flat()
				.flatMap((line) => line.replace(/\r/g, '').split('\n'))
				.map((line) => this.truncate(line))
				.slice(0, this.height - 1);

			this.banner();

			if (!this.isTTY) return;

			this.hideCursor();
			this.erase();

			if (!body.length) return;

			// close a foreign partial line so the block never starts mid-row
			if (!this.atLineStart) this.emit('\n');

			this.emit(`${body.join('\n')}\n`);

			this.liveLineCount = body.length;
		} finally {
			this.redrawing = false;
		}
	}

	/** Registers or updates one owner's live block. */
	public setBlock(owner: symbol, lines: string[], options: { captureConsole?: boolean } = {}): void {
		if (!this.isTTY) {
			// append-only: no live region to maintain
			this.banner();
			this.emit(`${lines.map((line) => Brand.plain(line)).join('\n')}\n`);
			return;
		}

		this.blocks.set(owner, lines);

		if (options.captureConsole) this.interceptConsole();

		this.redraw();
	}

	/**
	 * Writes a permanent line above the live region.
	 *
	 * @remarks
	 * Anything written straight to stdout while a block is live is erased by the
	 * next frame, because the cursor is rewound over it. Routing output through
	 * here erases the region first, emits the line, then redraws below it.
	 */
	public persist(line: string): void {
		if (!this.isTTY) {
			this.emit(`${Brand.plain(line)}\n`);
			return;
		}

		this.erase();
		this.emit(`${line}\n`);
		this.redraw();
	}

	/**
	 * Retires one owner's block, leaving its last frame on screen.
	 *
	 * @remarks
	 * The finished block is promoted to permanent output rather than erased, so a
	 * completed job's summary survives while other jobs keep rendering below it.
	 */
	public releaseBlock(owner: symbol): void {
		const finished = this.blocks.get(owner);

		if (!finished || !this.isTTY) {
			this.blocks.delete(owner);
			return;
		}

		this.erase();
		this.blocks.delete(owner);

		this.emit(`${finished.map((line) => this.truncate(line)).join('\n')}\n`);

		this.redraw();

		if (!this.blocks.size) this.release();
	}

	/** Restores the terminal once no block is live. */
	public release(): void {
		process.removeListener('exit', this.onExit);
		process.removeListener('SIGINT', this.onSignal);
		process.removeListener('SIGTERM', this.onSignal);

		if (this.cursorHidden) {
			this.emit('\x1B[?25h');
			this.cursorHidden = false;
		}

		this.liveLineCount = 0;

		this.restoreConsole();
	}
}
