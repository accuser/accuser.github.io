<script lang="ts">
	import { cn, type ElementProps } from '$lib/utils';

	let {
		children,
		class: className,
		ref = $bindable(null),
		...props
	}: ElementProps<object, HTMLDivElement> = $props();
</script>

<div
	bind:this={ref}
	class={cn('prose h-full w-full max-w-prose prose-slate', className)}
	data-slot="prose"
	{...props}
>
	{@render children?.()}
</div>
