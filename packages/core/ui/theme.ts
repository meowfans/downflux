import { type ThemeOverrides } from 'segra-logger';

/**
 * DOWNFLUX branding for the progress panel and CLI output.
 *
 * @remarks
 * Applied the same way from the CLI and from inside an app, unless the host has
 * already called `SegraLogger.create()`, in which case its branding wins. The
 * banner prints because it is provided; there is no separate switch. The palette
 * is left at the Segra default, which DownFlux shares.
 */
export const downfluxTheme: ThemeOverrides = {
	name: 'DOWNFLUX',
	icon: '⬇',
	tagline: 'modular media extraction',
	banner: [
		' ____    ___  __        __ _   _  _____  _      _   _ __  __',
		'|  _ \\  / _ \\ \\ \\      / /| \\ | ||  ___|| |    | | | |\\ \\/ /',
		'| | | || | | | \\ \\ /\\ / / |  \\| || |_   | |    | | | | \\  / ',
		'| |_| || |_| |  \\ V  V /  | |\\  ||  _|  | |___ | |_| | /  \\ ',
		'|____/  \\___/    \\_/\\_/   |_| \\_||_|    |_____| \\___/ /_/\\_\\',
		'',
		'  ⬇ MODULAR MEDIA EXTRACTION'
	]
};
