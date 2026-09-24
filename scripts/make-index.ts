import * as fs from 'fs';
import * as path from 'path';

const INDEX_FILE_NAME = 'index.ts';

/** Directories that are build entries rather than part of the library surface. */
const NOT_EXPORTED = ['cli'];

/**
 * Whether a directory contributes anything to a barrel.
 *
 * @remarks
 * A directory with no TypeScript in it still looked like a valid export target, so
 * a half-created provider or a leftover empty folder produced
 * `export * from './thing'` for a module that does not exist and broke the build.
 */
const hasSources = (dirPath: string): boolean =>
	fs
		.readdirSync(dirPath, { withFileTypes: true })
		.some((entry) =>
			entry.isDirectory() ? hasSources(path.join(dirPath, entry.name)) : entry.name.endsWith('.ts') && entry.name !== INDEX_FILE_NAME
		);

export const makeIndex = async (directory: string) => {
	const dirPath = path.join(__dirname, '..', directory);
	console.log(`Making index file in ${directory}`);

	if (NOT_EXPORTED.includes(path.basename(directory))) return;

	const files = fs
		.readdirSync(dirPath)
		.filter((file) => file !== INDEX_FILE_NAME)
		.filter((file) => !file.startsWith('.')) // Exclude hidden files like .DS_Store
		.filter((file) => {
			const entry = path.join(dirPath, file);

			if (!fs.statSync(entry).isDirectory()) return file.endsWith('.ts');

			// a build entry, or a directory with nothing to export yet
			return !NOT_EXPORTED.includes(file) && hasSources(entry);
		});
	console.log(`Found ${files.length} ${files.length > 1 ? 'files' : 'file'}`);

	if (!files.length) return;

	const indexFileContent = files.map((file) => `export * from './${file.replace(/\.ts$/g, '')}';`).join('\n');
	const indexPath = path.join(__dirname, '..', directory, INDEX_FILE_NAME);
	console.log(`Writing to file ${directory}/index.ts`);

	fs.writeFileSync(indexPath, indexFileContent.concat('\n'), { flag: 'w' });
};

const getDirectories = (dir: string, dirPaths: string[] = []) => {
	dirPaths.push(dir);

	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		if (entry.isDirectory()) {
			getDirectories(path.join(dir, entry.name), dirPaths);
		}
	}

	return dirPaths;
};

(async () => {
	for (const path of getDirectories('./packages')) await makeIndex(path);

	console.log('\n\n- If your editor shows ESLint/TS errors, reload the window.');
	console.log("- Run 'pnpm run format' to update barrels and format.");
})();
