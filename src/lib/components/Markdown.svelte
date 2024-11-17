<script lang="ts">
	import buildGetDefinition from '$lib/ast/build-get-definition.js';
	import buildGetFrontmatter from '$lib/ast/build-get-frontmatter.js';
	import buildGetTitle from '$lib/ast/build-get-title.js';
	import buildGetToc, { type Depth } from '$lib/ast/build-get-toc.js';
	import { setAstContext } from '$lib/context/ast-context.js';
	import Node from './Mdast/Node.svelte';

	const { ast }: { ast: import('mdast').Root } = $props();

	let getDefinition = $derived.by(() => buildGetDefinition(ast));
	let getFrontmatter = $derived.by(() => buildGetFrontmatter(ast));
	let getTitle = $derived.by(() => buildGetTitle(ast));
	let getToc = $derived.by(() => buildGetToc(ast));

	setAstContext({
		getDefinition: (identfier: string | null | undefined) => getDefinition(identfier),
		getFrontmatter: () => getFrontmatter(),
		getTitle: () => getTitle(),
		getToc: (minDepth?: Depth, maxDepth?: Depth, ordered?: true) =>
			getToc(minDepth, maxDepth, ordered)
	});
</script>

<Node {...ast} />
