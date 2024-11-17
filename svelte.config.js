import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import fg from 'fast-glob';
import path from 'node:path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base:
				'BASE_PATH' in process.env && typeof process.env.BASE_PATH === 'string'
					? process.env.BASE_PATH
					: '',
			relative: false
		},
		prerender: {
			handleHttpError: (params) => {
				console.error(params.message);
			},
			handleMissingId: (params) => {
				console.error(params.message);
			},
			entries: fg
				.globSync(['data', '**', '*.md'].join(path.sep), { cwd: process.cwd() })
				.map((entry) => entry.replace(/(^data)|(index\.md$)|(\.md$)/g, ''))
		}
	},
	preprocess: vitePreprocess()
};

export default config;
