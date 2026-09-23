import { type ItemProgressSnapshot, type JobProgressEvent } from '@contracts';
import { ProgressFormatter, type ProgressManager } from '@core/progress';
import { Brand } from '@shared';
import { LogManager } from './LogManager';

/**
 * Renders job progress as a branded terminal panel.
 *
 * @remarks
 * Subscribes to `ProgressManager` and turns each event into a fixed block that
 * `LogManager` redraws in place. Rows that carry no data for the current phase
 * are omitted, so an image job does not show empty HLS segment counters.
 */
export class CliManager {
	private readonly logger = new LogManager();

	private tick = 0;

	constructor(private readonly progressManager: ProgressManager) {
		progressManager.on('progress', this.listener);
	}

	private readonly listener = (state: Partial<JobProgressEvent>) => {
		this.render(state);
	};

	public destroy() {
		this.progressManager.off('progress', this.listener);
		this.logger.destroy();
	}

	/** Usable width for wrapped prose, leaving room for the gutter. */
	private get bodyWidth(): number {
		return Math.max(24, (process.stdout.columns || 80) - 7);
	}

	/**
	 * Wraps prose onto multiple lines.
	 *
	 * @remarks
	 * Messages carry file paths and option blobs, so cutting them at the terminal
	 * edge hides the part that matters. Wrapping keeps the whole message, and
	 * because each wrapped line is a separate block row the live region still knows
	 * its exact height. Tokens longer than the width are hard-broken.
	 */
	private wrapText(text: string, width: number): string[] {
		const lines: string[] = [];

		let current = '';

		const flushOverflow = () => {
			while (current.length > width) {
				lines.push(current.slice(0, width));
				current = current.slice(width);
			}
		};

		for (const word of text.split(/\s+/).filter(Boolean)) {
			if (!current.length) current = word;
			else if (current.length + 1 + word.length <= width) current += ` ${word}`;
			else {
				lines.push(current);
				current = word;
			}

			flushOverflow();
		}

		if (current.length) lines.push(current);

		return lines;
	}

	/** `label   value` with the label column padded to a constant width. */
	private row(label: string, value: string): string {
		return `  ${Brand.muted(label.padEnd(10))} ${value}`;
	}

	/** Shortens a URL to its host plus trailing path so long CDN URLs stay readable. */
	private shortenUrl(value?: string): string | null {
		if (!value) return null;

		try {
			const url = new URL(value);
			const tail = url.pathname.split('/').filter(Boolean).pop() ?? '';

			return Brand.dim(`${url.hostname}${tail ? `/…/${tail}` : ''}`);
		} catch {
			return Brand.dim(value);
		}
	}

	/**
	 * One line per concurrently downloading item.
	 *
	 * @remarks
	 * Downloads run in parallel, so a single byte counter can only ever describe
	 * whichever item reported last. Giving each item its own row is what makes the
	 * numbers mean something when several files are in flight.
	 */
	private itemRow(item: ItemProgressSnapshot, all: ItemProgressSnapshot[]): string {
		const labelWidth = Math.min(28, Math.max(...all.map((entry) => entry.label.length), 8));
		const label = item.label.length > labelWidth ? `${item.label.slice(0, labelWidth - 1)}…` : item.label.padEnd(labelWidth);

		// segmented streams know their segment ratio but not their byte total
		const useSegments = item.totalBytes <= 0 && item.totalSegments > 0;

		const done = useSegments ? item.resolvedSegments : item.downloadedBytes;
		const total = useSegments ? item.totalSegments : item.totalBytes;

		const cells = [
			ProgressFormatter.bar(done, total, 18),
			ProgressFormatter.percent(done, total),
			Brand.bold(ProgressFormatter.formatBytes(item.downloadedBytes).padStart(9))
		];

		if (item.status === 'DOWNLOADING') {
			cells.push(Brand.muted(ProgressFormatter.formatSpeed(item.speed).padStart(11)));
			cells.push(Brand.muted(`ETA ${ProgressFormatter.formatDuration(item.eta)}`));
		} else {
			cells.push(item.status === 'FAILED' ? Brand.danger('✖ failed') : Brand.success('✔ done'));
		}

		return `  ${Brand.dim(label)}  ${cells.join('  ')}`;
	}

	private isActive(status?: string): boolean {
		return status !== 'COMPLETED' && status !== 'FAILED' && status !== 'ABORTED';
	}

	private render(state: Partial<JobProgressEvent>) {
		const s = state;
		const status = s.status ?? 'STARTED';

		this.tick += 1;

		const heading = [
			this.isActive(status) ? Brand.spinner(this.tick) : Brand.accent(Brand.ICON),
			Brand.bold(Brand.NAME),
			Brand.dim('│'),
			Brand.statusLabel(status)
		].join(' ');

		const lines: string[] = ['', heading, ''];

		if (s.totalTargets) lines.push(this.row('Targets', ProgressFormatter.countTrack(s.resolvedTargets, s.totalTargets)));
		if (s.totalItems) lines.push(this.row('Items', ProgressFormatter.countTrack(s.resolvedItems, s.totalItems)));
		if (s.totalSegments) lines.push(this.row('Segments', ProgressFormatter.countTrack(s.resolvedSegments, s.totalSegments)));

		if (s.downloadedBytes || s.totalBytes) {
			lines.push(this.row('Download', ProgressFormatter.byteTrack(s.downloadedBytes, s.totalBytes, s.speed, s.eta)));
		}

		const target = this.shortenUrl(s.currentTarget);
		const item = this.shortenUrl(s.currentItem);
		const redirected = this.shortenUrl(s.redirectedUrl);

		if (target || item || redirected) lines.push('');

		if (target) lines.push(this.row('Source', target));
		if (item) lines.push(this.row('File', item));
		if (redirected) lines.push(this.row('Redirect', redirected));

		const items = s.activeItems ?? [];

		if (items.length) {
			lines.push('');

			for (const item of items) lines.push(this.itemRow(item, items));
		}

		if (s.failed) lines.push(this.row('Failed', Brand.danger(`${s.failed}`)));

		if (s.message) {
			const wrapped = this.wrapText(s.message, this.bodyWidth);

			lines.push('', `  ${Brand.accentSoft('›')} ${Brand.dim(wrapped[0] ?? '')}`);

			for (const continuation of wrapped.slice(1)) lines.push(`    ${Brand.dim(continuation)}`);
		}

		if (s.error) {
			const reason = s.error instanceof Error ? s.error.message : String(s.error);
			const wrapped = this.wrapText(reason, this.bodyWidth);

			lines.push('', this.row('Error', Brand.danger(wrapped[0] ?? '')));

			for (const continuation of wrapped.slice(1)) lines.push(`${' '.repeat(13)}${Brand.danger(continuation)}`);
		}

		lines.push('');

		this.logger.renderBlock(lines, this.progressManager.renderOptions);
	}
}
