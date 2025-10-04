<script lang="ts">
	import { cn, type WithElementRef } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		children,
		class: className,
		href,
		ref = $bindable(null),
		...props
	}: WithElementRef<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
		href: string;
	} = $props();
</script>

<a
	bind:this={ref}
	class={cn(
		'text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200',
		className
	)}
	{href}
	{...props}>{@render children?.()}</a
>
