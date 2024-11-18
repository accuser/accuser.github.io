<script lang="ts">
	import Layout from '$lib/components/Layout.svelte';

	let { children, data } = $props();

	let {
		site: { links = [], sections = [], title }
	} = $derived(data);
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="w-full">
	<Layout {links} {sections}>
		{@render children?.()}
	</Layout>
</div>
