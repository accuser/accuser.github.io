<script lang="ts">
	import Markdown from '$lib/components/Markdown.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let {
		page: { ast, title }
	} = $derived(data);
</script>

<article class="prose prose-base prose-orange max-w-prose dark:prose-invert">
	<header>{title}</header>
	<main>
		<Markdown {ast} />
	</main>
	<footer></footer>
</article>
