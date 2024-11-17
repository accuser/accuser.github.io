<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import Node from './Node.svelte';

	let { children, title, url }: import('mdast').Link = $props();
</script>

<Link href={url} {title}
	>{#each children as node}<Node {...node} />{/each}</Link
>
