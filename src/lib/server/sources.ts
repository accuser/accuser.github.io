import FastGlob from 'fast-glob';
import { join } from 'path';
import { cwd } from 'process';

const DEFAULT_PATTERN = [join('**', '*.md')];
const DEFAULT_CWD = join(cwd(), 'data');

const buildSources = () =>
	FastGlob.glob(DEFAULT_PATTERN, {
		cwd: DEFAULT_CWD,
		dot: false,
		followSymbolicLinks: false
	});

const sources = (await buildSources()).sort((a, b) => {
	for (const name of ['site.config.yaml', 'index.md']) {
		if (a === name) return -1;
		if (b === name) return 1;
	}

	return a.localeCompare(b);
});

export { DEFAULT_CWD as cwd, sources as default };
