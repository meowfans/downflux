import { execFileSync } from 'child_process';
import { readFileSync } from 'fs';

/**
 * Versions and tags a release. Distribution is deliberately not part of it.
 *
 * @remarks
 * Publishing to npm is irreversible — a version number can never be reused — so it
 * stays a separate, deliberate command rather than the tail of a longer chain that
 * might reach it after something earlier went wrong. The GitHub release is separate
 * again, so either can be retried without redoing the other.
 *
 * `main` is protected, so the version commit has to travel through a pull request
 * while the tag has to wait for whatever commit actually lands. Two ordering rules
 * fall out of that, and both were learned the hard way on v2.0.0:
 *
 * - the release branch is cut *before* `standard-version` runs, because it commits
 *   to the current branch; bumping on `main` leaves a local commit that the squash
 *   merge then duplicates, and `main` diverges from its own remote
 * - the tag is created *after* the merge, against the squashed commit; tagging
 *   earlier strands the tag on a commit that never reaches the released history
 */
const major = process.argv.includes('--major');

const run = (command: string, args: string[], quiet = false): string => {
	const out = execFileSync(command, args, { encoding: 'utf-8', stdio: quiet ? 'pipe' : ['inherit', 'pipe', 'inherit'] });
	return out?.trim() ?? '';
};

const version = (): string => JSON.parse(readFileSync('package.json', 'utf-8')).version;

const step = (n: number, message: string) => console.log(`\n[${n}/5] ${message}`);

const preflight = () => {
	if (run('git', ['rev-parse', '--abbrev-ref', 'HEAD'], true) !== 'main') throw new Error('release must start from main');
	if (run('git', ['status', '--porcelain'], true)) throw new Error('working tree is not clean');

	run('git', ['fetch', '-q', 'origin', 'main'], true);

	if (run('git', ['rev-list', '--count', 'origin/main..HEAD'], true) !== '0') throw new Error('main has unpushed commits');
	if (run('git', ['rev-list', '--count', 'HEAD..origin/main'], true) !== '0') throw new Error('main is behind origin/main');
};

try {
	step(1, 'preflight');
	preflight();

	step(2, 'cutting release branch before the bump');
	run('git', ['checkout', '-q', '-b', 'release/pending']);

	step(3, `bumping version${major ? ' (major)' : ''}`);
	run('pnpm', ['exec', 'standard-version', '--skip.tag', ...(major ? ['--release-as', 'major'] : [])]);

	const tag = `v${version()}`;

	step(4, `opening and merging the release pull request for ${tag}`);
	run('git', ['branch', '-m', `release/${tag}`]);
	run('git', ['push', '-q', '-u', 'origin', 'HEAD']);
	run('gh', ['pr', 'create', '-t', `Release ${tag}`, '-b', `Release ${tag}`]);
	run('gh', ['pr', 'merge', '--squash', '--delete-branch']);

	step(5, `tagging the merged commit as ${tag}`);
	run('git', ['checkout', '-q', 'main']);
	run('git', ['pull', '-q', '--ff-only']);

	// the squashed commit is the only thing that may carry the tag
	execFileSync('git', ['merge-base', '--is-ancestor', 'HEAD', 'origin/main'], { stdio: 'ignore' });
	run('git', ['tag', '-a', tag, '-m', tag]);
	run('git', ['push', '-q', 'origin', tag]);

	console.log(`\n${tag} is tagged on main.`);
	console.log('publish it with: pnpm run publish:npm');
	console.log('then announce it with: pnpm run publish:github');
} catch (error) {
	console.error(`\nrelease failed: ${(error as Error).message}`);
	console.error('nothing further was attempted; re-run after fixing, or finish by hand with release:tag');
	process.exit(1);
}
