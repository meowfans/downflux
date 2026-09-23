import { type JobProgressStatus } from '@types';

/**
 * ANSI styling helpers and DownFlux brand assets.
 *
 * @remarks
 * Kept dependency-free on purpose: the package ships as a library, so pulling a
 * colour or spinner dependency in for CLI output would push it onto every
 * consumer. Colour is disabled automatically when the stream is not a TTY, when
 * `NO_COLOR` is set, or when `TERM=dumb`, so piped output stays clean.
 */
export class Brand {
	/** Downward flux arrow used as the product icon. */
	public static readonly ICON = '⬇';

	public static readonly NAME = 'DOWNFLUX';

	public static readonly TAGLINE = 'modular media extraction';

	private static readonly ESC = '\x1B[';

	public static get colorEnabled(): boolean {
		if (process.env.NO_COLOR !== undefined) return false;
		if (process.env.FORCE_COLOR !== undefined) return process.env.FORCE_COLOR !== '0';
		if (process.env.TERM === 'dumb') return false;

		return Boolean(process.stdout.isTTY);
	}

	private static wrap(code: string, value: string): string {
		if (!Brand.colorEnabled) return value;

		return `${Brand.ESC}${code}m${value}${Brand.ESC}0m`;
	}

	public static bold(value: string): string {
		return Brand.wrap('1', value);
	}

	public static dim(value: string): string {
		return Brand.wrap('2', value);
	}

	/** Brand accent, a cyan-leaning gradient anchor. */
	public static accent(value: string): string {
		return Brand.wrap('38;5;44', value);
	}

	public static accentSoft(value: string): string {
		return Brand.wrap('38;5;38', value);
	}

	public static success(value: string): string {
		return Brand.wrap('38;5;42', value);
	}

	public static warn(value: string): string {
		return Brand.wrap('38;5;214', value);
	}

	public static danger(value: string): string {
		return Brand.wrap('38;5;203', value);
	}

	public static muted(value: string): string {
		return Brand.wrap('38;5;245', value);
	}

	/** Strips ANSI so width maths stay correct for styled strings. */
	public static plain(value: string): string {
		// eslint-disable-next-line no-control-regex
		return value.replace(/\x1B\[[0-9;]*m/g, '');
	}

	public static width(value: string): number {
		return Brand.plain(value).length;
	}

	/** The one-line wordmark shown at the top of a render block. */
	public static wordmark(): string {
		return `${Brand.accent(Brand.ICON)} ${Brand.bold(Brand.accent(Brand.NAME))} ${Brand.dim(`· ${Brand.TAGLINE}`)}`;
	}

	/** Visible width of the ASCII wordmark, used to pick a banner that fits. */
	private static readonly WORDMARK_WIDTH = 60;

	/**
	 * Multi-line banner, used once when a job starts on an interactive terminal.
	 *
	 * @remarks
	 * Falls back to the single-line wordmark on terminals too narrow to hold the
	 * ASCII block without wrapping it into noise.
	 */
	public static banner(width: number = process.stdout.columns || 80): string[] {
		if (width < Brand.WORDMARK_WIDTH + 2) return [Brand.wordmark()];

		const mark = [
			' ____    ___  __        __ _   _  _____  _      _   _ __  __',
			'|  _ \\  / _ \\ \\ \\      / /| \\ | ||  ___|| |    | | | |\\ \\/ /',
			'| | | || | | | \\ \\ /\\ / / |  \\| || |_   | |    | | | | \\  / ',
			'| |_| || |_| |  \\ V  V /  | |\\  ||  _|  | |___ | |_| | /  \\ ',
			'|____/  \\___/    \\_/\\_/   |_| \\_||_|    |_____| \\___/ /_/\\_\\'
		];

		return [...mark.map((line) => Brand.accent(line)), '', Brand.dim(`  ${Brand.ICON} ${Brand.TAGLINE.toUpperCase()}`)];
	}

	private static readonly STATUS_ICONS: Record<JobProgressStatus, string> = {
		'STARTED': '◆',
		'QUEUED': '◇',
		'DOWNLOADING': '⬇',
		'DOWNLOADED': '✔',
		'COMPLETED': '✔',
		'FAILED': '✖',
		'ABORTED': '⏹',
		'EXTRACTION-HOOK': '⚙',
		'DOWNLOADING-HOOK': '⚙'
	};

	public static statusIcon(status: JobProgressStatus): string {
		return Brand.STATUS_ICONS[status] ?? '•';
	}

	/** Colors a status label with its icon. */
	public static statusLabel(status: JobProgressStatus): string {
		const label = `${Brand.statusIcon(status)} ${status}`;

		switch (status) {
			case 'COMPLETED':
			case 'DOWNLOADED':
				return Brand.success(label);

			case 'FAILED':
				return Brand.danger(label);

			case 'ABORTED':
				return Brand.warn(label);

			case 'DOWNLOADING':
				return Brand.accent(label);

			default:
				return Brand.muted(label);
		}
	}

	private static readonly SPINNER = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

	public static spinner(tick: number): string {
		return Brand.accent(Brand.SPINNER[tick % Brand.SPINNER.length]);
	}
}
