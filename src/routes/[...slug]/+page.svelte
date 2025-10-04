<script lang="ts">
	import Markdown from '$lib/components/markdown/markdown.svelte';
	import Prose from '$lib/components/prose/prose.svelte';
	import { Page, Post } from '$lib/layouts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let { page } = $derived(data);
	let {
		attributes: { ast }
	} = $derived(page);

	const layoutMap = {
		pages: Page,
		posts: Post
	} as const;

	let Layout = $derived(layoutMap[page.type]);
</script>

<Layout.Root page={page as never}><Prose><Markdown {ast} /></Prose></Layout.Root>
