<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import type { Snippet } from 'svelte';
	import type { PageData } from './$types';

	let { children, data }: { children: Snippet; data: PageData } = $props();

	let { title } = $derived(data);
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<article class="prose prose-base prose-orange mx-auto max-w-prose dark:prose-invert">
	<heading>
		<h1>{title}</h1>
	</heading>
	<main>
		{@render children?.()}
	</main>
	<footer></footer>
</article>

<Footer />
