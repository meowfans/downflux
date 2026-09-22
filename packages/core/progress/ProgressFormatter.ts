import { Brand } from '@shared';

/**
 * Formats byte counts, rates, and progress bars for CLI output.
 *
 * @remarks
 * Rendering helpers live apart from `ProgressManager` so the manager stays a
 * pure state/event object and the presentation can change without touching the
 * download path.
 */
export class ProgressFormatter {
	private static readonly BAR_WIDTH = 28;

	/** Partial block glyphs, used so the bar advances smoothly at sub-cell resolution. */
	private static readonly PARTIALS = ['', '▏', '▎', '▍', '▌', '▋', '▊', '▉'];

	public static formatBytes(bytes: number): string {
		if (!bytes || bytes < 0) return '0 B';

		const k = 1024;
		const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
		const i = Math.min(Math.floor(Math.log(bytes) / Math.log(k)), sizes.length - 1);

		return `${parseFloat((bytes / Math.pow(k, i)).toFixed(i === 0 ? 0 : 2))} ${sizes[i]}`;
	}

	/** Formats a byte rate, e.g. `4.21 MB/s`. */
	public static formatSpeed(bytesPerSecond: number): string {
		if (!bytesPerSecond || bytesPerSecond <= 0) return '--';

		return `${ProgressFormatter.formatBytes(bytesPerSecond)}/s`;
	}

	/** Formats a duration in seconds as `mm:ss`, or `hh:mm:ss` past an hour. */
	public static formatDuration(seconds: number): string {
		if (!Number.isFinite(seconds) || seconds <= 0) return '--:--';

		const total = Math.round(seconds);
		const hours = Math.floor(total / 3600);
		const minutes = Math.floor((total % 3600) / 60);
		const secs = total % 60;

		const pad = (value: number) => value.toString().padStart(2, '0');

		return hours > 0 ? `${hours}:${pad(minutes)}:${pad(secs)}` : `${pad(minutes)}:${pad(secs)}`;
	}

	private static percentage(done: number, total?: number): number {
		if (!total || total <= 0) return 0;

		return Math.min(Math.max((done / total) * 100, 0), 100);
	}

	/**
	 * Renders a unicode progress bar.
	 *
	 * @param done Completed units.
	 * @param total Total units, or 0/undefined when the total is unknown.
	 * @param width Bar width in cells.
	 */
	public static bar(done: number, total?: number, width: number = ProgressFormatter.BAR_WIDTH): string {
		const percent = ProgressFormatter.percentage(done, total);

		// an unknown total renders as an indeterminate track rather than a fake 0%
		if (!total || total <= 0) {
			return `${Brand.dim('─'.repeat(width))}`;
		}

		const exact = (percent / 100) * width;
		const filled = Math.floor(exact);
		const partial = ProgressFormatter.PARTIALS[Math.floor((exact - filled) * ProgressFormatter.PARTIALS.length)];

		const head = '█'.repeat(filled) + partial;
		const tail = '░'.repeat(Math.max(0, width - Brand.width(head)));

		return `${Brand.accent(head)}${Brand.dim(tail)}`;
	}

	/**
	 * `42.5%`, padded so the column does not jitter as the number grows.
	 *
	 * @remarks
	 * An unknown total renders as `--` rather than `0.0%`. Segmented streams report
	 * no overall byte length, and printing a percentage there claims a completion
	 * ratio that was never measured.
	 */
	public static percent(done: number, total?: number): string {
		if (!total || total <= 0) return '   --';

		return `${ProgressFormatter.percentage(done, total).toFixed(1).padStart(5)}%`;
	}

	/**
	 * A byte-oriented track: bar, percentage, transferred/total, rate and ETA.
	 *
	 * @param downloadedBytes Bytes written so far.
	 * @param totalBytes Expected total, when the server declared one.
	 * @param speed Bytes per second.
	 * @param eta Seconds remaining.
	 */
	public static byteTrack(downloadedBytes = 0, totalBytes = 0, speed = 0, eta = 0): string {
		const transferred = totalBytes
			? `${ProgressFormatter.formatBytes(downloadedBytes)} / ${ProgressFormatter.formatBytes(totalBytes)}`
			: ProgressFormatter.formatBytes(downloadedBytes);

		return [
			ProgressFormatter.bar(downloadedBytes, totalBytes),
			ProgressFormatter.percent(downloadedBytes, totalBytes),
			Brand.bold(transferred),
			Brand.muted(ProgressFormatter.formatSpeed(speed)),
			Brand.muted(`ETA ${ProgressFormatter.formatDuration(eta)}`)
		].join('  ');
	}

	/** A count-oriented track: bar, percentage and `done/total`. */
	public static countTrack(done = 0, total = 0, width: number = ProgressFormatter.BAR_WIDTH): string {
		return [ProgressFormatter.bar(done, total, width), ProgressFormatter.percent(done, total), Brand.bold(`${done}/${total}`)].join(
			'  '
		);
	}

	/**
	 * Legacy track formatter.
	 *
	 * @deprecated Use {@link ProgressFormatter.byteTrack} or {@link ProgressFormatter.countTrack}.
	 */
	public static createTrack(type: 'items' | 'item', downloaded: number = 0, total: number = 0): string {
		return type === 'item' ? ProgressFormatter.byteTrack(downloaded, total) : ProgressFormatter.countTrack(downloaded, total);
	}
}
