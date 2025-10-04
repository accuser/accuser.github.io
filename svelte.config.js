import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		experimental: { async: true }
	},
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		experimental: {
			remoteFunctions: true
		},
		prerender: {
			crawl: true,
			entries: ['/categories']
		}
	},
	preprocess: [vitePreprocess()]
};

export default config;
