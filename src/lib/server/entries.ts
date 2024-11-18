import { extname } from 'path';
import slugFromSource from './slug-from-source.js';
import sources from './sources.js';

const entries = () =>
	sources
		.filter((source) => extname(source) === '.md')
		.map((source) => ({
			slug: slugFromSource(source)
		}));

export { entries };
