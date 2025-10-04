<script lang="ts">
	import type { Tutorial } from '$lib/schemas/tutorial.schema';
	import { cn, type WithElementRef } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		children,
		class: className,
		page,
		ref = $bindable(null),
		...props
	}: WithElementRef<HTMLAttributes<HTMLElement>, HTMLElement> & {
		page: Tutorial;
	} = $props();
</script>

<main
	bind:this={ref}
	class={cn('relative flex h-full w-full flex-col', className)}
	data-slot="site"
	{...props}
>
	{@render children?.()}
</main>
