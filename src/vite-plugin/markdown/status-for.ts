import { statSync } from 'node:fs';
import { basename, dirname, relative, resolve } from 'node:path';

const CONTENT_ROOT = resolve(process.cwd(), 'content');

export const statusFor = (path: string) => {
	const stat = statSync(path);

	const pathname = relative(CONTENT_ROOT, path);

	if (pathname.startsWith('..')) {
		throw new Error('`path` is outside of content root');
	}

	const [collection] = pathname.split('/');
	const slug = basename(pathname, '.md');

	return {
		createdAt: stat.ctime.toISOString(),
		collection,
		dirname: dirname(pathname),
		modifiedAt: stat.mtime.toISOString(),
		slug
	};
};
