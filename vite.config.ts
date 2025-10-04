import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { FromMarkdownSchema } from './src/lib/schemas/from-markdown.schema';
import { markdown } from './src/vite-plugin';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), markdown({ schema: FromMarkdownSchema })],
	server: {
		host: '0.0.0.0'
	}
});
