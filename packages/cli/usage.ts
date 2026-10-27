import { Provider, VideoQuality } from '@types';
import { Style } from 'segra-logger';

/** Long-form help, printed for `--help` and for an empty invocation. */
export const usage = (): string => {
	const style = new Style();

	return [
		style.wordmark(),
		'',
		style.bold('USAGE'),
		'  downflux <url> [options]',
		'  downflux providers [filter]',
		'',
		style.bold('OPTIONS'),
		`  -o, --output <dir>     directory to download into ${style.dim('(default: ./DownFlux)')}`,
		`  -q, --quality <q>      preferred video quality ${style.dim(Object.values(VideoQuality).slice(0, -1).join(', '))}`,
		`  -m, --method <name>    provider method to call ${style.dim('(default: the first one it exposes)')}`,
		`  -c, --concurrency <n>  parallel downloads ${style.dim('(default: 5)')}`,
		`      --json             print extracted metadata, download nothing`,
		`      --no-progress      suppress the progress panel`,
		'  -h, --help             show this help',
		'  -v, --version          show the version',
		'',
		style.bold('EXAMPLES'),
		`  ${style.dim('# download to ./media at 1080p')}`,
		'  downflux https://www.example.com/view_video.php?viewkey=abc -o ./media -q 1080p',
		'',
		`  ${style.dim('# inspect what would be downloaded')}`,
		'  downflux https://www.example.com/view_video.php?viewkey=abc --json',
		'',
		`  ${style.dim('# which sites are supported')}`,
		'  downflux providers porn',
		''
	].join('\n');
};

/** Supported providers, optionally filtered by substring. */
export const providerList = (filter?: string): string => {
	const names = Object.values(Provider)
		.map((value) => value.replace(/Provider$/, ''))
		.filter((name) => name !== 'Default')
		.filter((name) => !filter || name.toLowerCase().includes(filter.toLowerCase()))
		.sort((a, b) => a.localeCompare(b));

	const style = new Style();

	if (!names.length) return style.dim(`no provider matches "${filter}"`);

	const width = Math.max(...names.map((n) => n.length)) + 2;
	const columns = Math.max(1, Math.floor((process.stdout.columns || 80) / width));

	const rows: string[] = [];

	for (let i = 0; i < names.length; i += columns) {
		rows.push(
			'  ' +
				names
					.slice(i, i + columns)
					.map((n) => n.padEnd(width))
					.join('')
					.trimEnd()
		);
	}

	return [`${style.bold(String(names.length))} providers${filter ? style.dim(` matching "${filter}"`) : ''}`, '', ...rows, ''].join('\n');
};
