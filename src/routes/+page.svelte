<script lang="ts">
	import * as Layout from '$lib/components/layout/page';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<Layout.Root>
	{#snippet header()}
		<h1>Welcome to SvelteKit</h1>
	{/snippet}
	<p>
		Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
	</p>
</Layout.Root>
