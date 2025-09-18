<script lang="ts">
	import { getSiteContext } from '$lib/providers/site';
	import type { SiteContext } from '$lib/providers/site/create-site-context.svelte';
	import { cn, type ElementProps } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import Footer from './footer.svelte';
	import Header from './header.svelte';

	let {
		children,
		class: className,
		footer,
		header,
		ref = $bindable(null),
		...props
	}: ElementProps<{ footer?: Snippet<[SiteContext]>; header?: Snippet<[SiteContext]> }> = $props();
</script>

<div
	bind:this={ref}
	class={cn('relative flex h-full w-full flex-col', className)}
	data-slot="page"
	{...props}
>
	{#if header}
		<Header>{@render header(getSiteContext())}</Header>
	{/if}
	{@render children?.()}
	{#if footer}
		<Footer>{@render footer(getSiteContext())}</Footer>
	{/if}
</div>
