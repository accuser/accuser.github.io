<script lang="ts">
	import Markdown from '$lib/components/markdown/markdown.svelte';
	import Prose from '$lib/components/prose/prose.svelte';
	import { getPostContext } from '$lib/providers/post';
	import type { PostContext } from '$lib/providers/post/create-post-context.svelte';
	import { getSiteContext } from '$lib/providers/site';
	import type { SiteContext } from '$lib/providers/site/create-site-context.svelte';
	import { cn, type ElementProps } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import Content from './content.svelte';
	import Header from './header.svelte';

	let {
		children,
		class: className,
		content = defaultContent,
		footer,
		header = defaultHeader,
		ref = $bindable(null),
		...props
	}: ElementProps<{
		content?: Snippet<[{ post: PostContext; site: SiteContext }]>;
		footer?: Snippet<[{ post: PostContext; site: SiteContext }]>;
		header?: Snippet<[{ post: PostContext; site: SiteContext }]>;
	}> = $props();
</script>

{#snippet defaultContent({ post: { ast } }: { post: PostContext; site: SiteContext })}
	<Content><Prose><Markdown {ast} /></Prose></Content>
{/snippet}

{#snippet defaultHeader({ post: { title } }: { post: PostContext; site: SiteContext })}
	<Header><h1>{title}</h1></Header>
{/snippet}

<div
	bind:this={ref}
	class={cn('relative flex h-full w-full flex-col', className)}
	data-slot="post"
	{...props}
>
	{@render header?.({ post: getPostContext(), site: getSiteContext() })}
	{#if content}{@render content({
			post: getPostContext(),
			site: getSiteContext()
		})}{:else}{@render children?.()}{/if}
	{@render footer?.({ post: getPostContext(), site: getSiteContext() })}
</div>
