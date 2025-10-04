<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let { categories } = $derived(data);
</script>

{JSON.stringify(categories)}
<svelte:head>
	<title>Categories - Accuser</title>
	<meta name="description" content="Browse articles by categories on Accuser." />
</svelte:head>

<main class="container mx-auto px-4 py-8">
	<h1 class="mb-6 text-3xl font-bold">Categories</h1>
	{#if categories.length > 0}
		{#each categories as { id, attributes, links, relationships: { posts: { data: posts } } }}
			{attributes?.name || id}
			<ul class="space-y-4">
				{#each posts as post}
					<li>
						<a href={post.id}>{post.id}</a>
					</li>
				{/each}
			</ul>
		{/each}
	{:else}
		<p>No categories found.</p>
	{/if}
</main>
