<script lang="ts">
	import * as Layout from '$lib/layouts/site';
	import * as Site from '$lib/providers/site';
	import '../app.css';
	import type { LayoutProps } from './$types';

	let { children, data }: LayoutProps = $props();

	let { site } = $derived(data);
</script>

<Site.Provider {site}>
	<Layout.Root>
		{@render children?.()}
	</Layout.Root>
</Site.Provider>
