<script lang="ts">
	import type { Page } from '$lib/schemas';
	import { cn, type WithElementRef } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		children,
		class: className,
		page,
		ref = $bindable(null),
		...props
	}: WithElementRef<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & { page: Page } = $props();
</script>

<div
	bind:this={ref}
	class={cn('relative flex h-full w-full flex-col', className)}
	data-slot="site"
	{...props}
>
	{@render children?.()}
</div>
