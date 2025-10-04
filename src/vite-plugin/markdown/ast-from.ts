import { directiveFromMarkdown } from 'mdast-util-directive';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { frontmatterFromMarkdown } from 'mdast-util-frontmatter';
import { gfmFromMarkdown } from 'mdast-util-gfm';
import { directive } from 'micromark-extension-directive';
import { frontmatter } from 'micromark-extension-frontmatter';
import { gfm } from 'micromark-extension-gfm';

export const astFrom = (markdown: string) =>
	fromMarkdown(markdown, {
		extensions: [directive(), frontmatter(['yaml']), gfm()],
		mdastExtensions: [directiveFromMarkdown(), frontmatterFromMarkdown(['yaml']), gfmFromMarkdown()]
	});
