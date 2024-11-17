<script lang="ts">
	import Markdown from '$lib/components/Markdown.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let {
		page: { ast }
	} = $derived(data);
</script>

<Markdown {ast} />
