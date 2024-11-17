<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import { getAstContext } from '$lib/context/ast-context';
	import type { LinkReference } from 'mdast';
	import Node from './Node.svelte';

	let { children, identifier }: LinkReference = $props();

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

<Link href={url} {title}
	>{#each children as node}<Node {...node} />{/each}</Link
>
