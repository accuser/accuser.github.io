<script lang="ts">
	import type { Site } from '$lib/schemas/site.schema';
	import type { Snippet } from 'svelte';
	import { createSiteContext } from './create-site-context.svelte';

	let { children, site }: { children: Snippet; site: Site } = $props();

	const { description, image, title, href } = createSiteContext(site);
</script>

<svelte:head>
	<title>{title}</title>
	<link rel="icon" href={image} />
	<link rel="canonical" {href} />
	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta property="og:title" content={title} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={href} />
</svelte:head>

{@render children?.()}
