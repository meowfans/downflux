import { readFileSync } from 'fs';
import { defineConfig } from 'tsup';

const { version } = JSON.parse(readFileSync('./package.json', 'utf-8'));

/**
 * The CLI needs its version without reading package.json at runtime: the bin is
 * CommonJS, so `import.meta.url` is unavailable, and resolving a path relative to
 * the executable differs between the two output formats. Injecting it at build
 * time keeps one value correct in both.
 */
export default defineConfig({
	entry: {
  "base": "packages/base/index.ts",
  "contracts": "packages/contracts/index.ts",
  "core": "packages/core/index.ts",
  "engines": "packages/engines/index.ts",
  "providers": "packages/providers/index.ts",
  "shared": "packages/shared/index.ts",
  "storage": "packages/storage/index.ts",
  "types": "packages/types/index.ts",
  "cli": "packages/cli/main.ts"
},
	format: ["cjs", "esm"],
	dts: {
  "compilerOptions": {
    "ignoreDeprecations": "6.0"
  }
},
	clean: true,
	splitting: true,
	target: 'node22',
	platform: 'node',
	sourcemap: false,
	minify: false,
	keepNames: false,
	define: { __DOWNFLUX_VERSION__: JSON.stringify(version) }
});
