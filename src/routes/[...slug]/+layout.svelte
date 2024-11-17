<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { PageData } from './$types';

	let { children, data }: { children: Snippet; data: PageData } = $props();

	let {
		page: { title }
	} = $derived(data);
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<article class="prose-base prose-orange prose mx-auto max-w-prose dark:prose-invert">
	<heading>
		<h1>{title}</h1>
	</heading>
	<main>
		{@render children?.()}
	</main>
	<footer></footer>
</article>
