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
		content,
		footer = defaultFooter,
		header = defaultHeader,
		ref = $bindable(null),
		...props
	}: ElementProps<{
		content?: Snippet<[{ site: SiteContext }]>;
		footer?: Snippet<[{ site: SiteContext }]>;
		header?: Snippet<[{ site: SiteContext }]>;
	}> = $props();
</script>

{#snippet defaultFooter({ site: { year } }: { site: SiteContext })}
	<Footer><p>Copyright &copy; {year}</p></Footer>
{/snippet}

{#snippet defaultHeader({ site: { title } }: { site: SiteContext })}
	<Header><h1>{title}</h1></Header>
{/snippet}

<div
	bind:this={ref}
	class={cn('relative flex h-full w-full flex-col', className)}
	data-slot="site"
	{...props}
>
	{@render header?.({ site: getSiteContext() })}
	{#if content}{@render content({ site: getSiteContext() })}{:else}{@render children?.()}{/if}
	{@render footer?.({ site: getSiteContext() })}
</div>
