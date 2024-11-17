<script lang="ts">
	import { getAstContext } from '$lib/context/ast-context.js';
	import type { ImageReference } from 'mdast';

	// TODO: implement `referenceType`?
	let { alt, identifier }: ImageReference = $props();

	const { getDefinition } = getAstContext();

	let { url, title } = $derived.by(() => {
		const definition = getDefinition(identifier);

		if (definition) {
			return definition;
		} else {
			return { url: '#', title: undefined };
		}
	});
</script>

<img src={url} {alt} {title} />
