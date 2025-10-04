<script lang="ts">
	import { getSiteContext } from '$lib/providers/site';
	import type { SiteContext } from '$lib/providers/site/create-site-context.svelte';
	import { cn, type WithElementRef } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { Content, Footer } from '.';
	import Header from './header.svelte';

	let {
		children,
		class: className,
		content,
		footer = defaultFooter,
		header = defaultHeader,
		ref = $bindable(null),
		...props
	}: WithElementRef<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
		content?: Snippet<[SiteContext]>;
		footer?: Snippet<[SiteContext]>;
		header?: Snippet<[SiteContext]>;
	} = $props();
</script>

{#snippet defaultFooter({ year }: SiteContext)}
	<p>Copyright &copy; {year}</p>
{/snippet}

{#snippet defaultHeader({ title, url }: SiteContext)}
	<h1><a href={url}>{title}</a></h1>
{/snippet}

<div
	bind:this={ref}
	class={cn('relative flex h-full w-full flex-col', className)}
	data-slot="site"
	{...props}
>
	{#if header}<Header>{@render header(getSiteContext())}</Header>{/if}
	{#if content}<Content>{@render content(getSiteContext())}</Content
		>{:else}{@render children?.()}{/if}
	{#if footer}<Footer>{@render footer?.(getSiteContext())}</Footer>{/if}
</div>
