<script lang="ts">
	import { cn, type WithElementRef } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		children,
		class: className,
		ref = $bindable(null),
		...props
	}: WithElementRef<HTMLAttributes<HTMLElement>, HTMLElement> = $props();
</script>

<main bind:this={ref} class={cn(className)} data-slot="site-content" {...props}>
	{@render children?.()}
</main>
