#!/usr/bin/env node
import { downfluxTheme } from '@core/ui';
import { OutputType, VideoQuality } from '@types';
import { SegraLogger, Style } from 'segra-logger';
import { parseArgs } from 'util';
import { methodFor, providerFor, resolveProvider } from './resolve';
import { providerList, usage } from './usage';

const options = {
	'output': { type: 'string', short: 'o' },
	'quality': { type: 'string', short: 'q' },
	'method': { type: 'string', short: 'm' },
	'concurrency': { type: 'string', short: 'c' },
	'json': { type: 'boolean' },
	'no-progress': { type: 'boolean' },
	'help': { type: 'boolean', short: 'h' },
	'version': { type: 'boolean', short: 'v' }
} as const;

// set up front so errors and warnings are branded before any panel renders
SegraLogger.create({ theme: downfluxTheme, mode: 'live' });

const fail = (message: string): never => {
	SegraLogger.error(message);
	process.exit(1);
};

/** Injected by the build; see the `define` block in tsup.config.ts. */
declare const __DOWNFLUX_VERSION__: string;

const quality = (value?: string): VideoQuality | undefined => {
	if (!value) return undefined;

	const match = Object.values(VideoQuality).find((q) => q === value);

	if (!match) fail(`unknown quality "${value}". Try one of: ${Object.values(VideoQuality).slice(0, -1).join(', ')}`);

	return match;
};

const run = async (): Promise<void> => {
	const { values, positionals } = parseArgs({ options, allowPositionals: true, strict: true });

	if (values.help) return void process.stdout.write(usage());
	if (values.version) return void process.stdout.write(`${__DOWNFLUX_VERSION__}\n`);

	const [first, second] = positionals;

	if (first === 'providers') return void process.stdout.write(providerList(second));
	if (!first) return void process.stdout.write(usage());

	const provider = providerFor(first);
	const resolved = resolveProvider(first);
	const progress = !values['no-progress'] && !values.json;

	if (resolved === 'DefaultProvider') {
		SegraLogger.warn(
			'no provider claims this host; falling back to generic extraction. Run `downflux providers` to see what is supported'
		);
	}

	const method = methodFor(provider, values.method);

	provider
		.setProgressLogging(progress, { captureConsole: true })
		.setOutput(values.json ? OutputType.RETURN : OutputType.DEVICE, { directoryPath: values.output ?? 'DownFlux' })
		.setJobOptions({ ...(values.concurrency && { concurrency: Number(values.concurrency) }) });

	const invoke = (provider as unknown as Record<string, (q?: VideoQuality) => Promise<unknown>>)[method];
	const extracted = await invoke.call(provider, quality(values.quality));

	if (values.json) return void process.stdout.write(`${JSON.stringify(extracted, null, 2)}\n`);

	// downloads continue after extraction resolves, so wait for them before exiting
	const { downloaded, failed, errors } = await provider.whenSettled();

	// disposing first ends the live panel, so the summary lands below its last frame
	await provider.dispose({ closeConnections: true });

	const style = new Style(process.stderr);

	SegraLogger.log(`${style.success('✔')} ${downloaded} downloaded${failed ? style.danger(`, ${failed} failed`) : ''}`);

	for (const error of errors.slice(0, 3)) SegraLogger.error(error.message.split('|')[0].trim());

	if (failed) process.exitCode = 1;
};

run().catch((error: Error) => fail(error.message));
