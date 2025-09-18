<script lang="ts">
	import type { Snippet } from 'svelte';
	import { createSiteContext } from './create-site-context.svelte';
	import type { SiteProps } from './site-props';

	let { children, site }: { children: Snippet; site: SiteProps } = $props();

	const { description, image, title, url } = createSiteContext(site);
</script>

<svelte:head>
	<title>{title}</title>
	<link rel="icon" href={image} />
	<link rel="canonical" href={url} />
	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta property="og:title" content={title} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
</svelte:head>

{@render children?.()}
