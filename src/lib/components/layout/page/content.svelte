<script lang="ts">
	import { cn, type ElementProps } from '$lib/utils';

	let { children, class: className, ref = $bindable(null), ...props }: ElementProps = $props();
</script>

<main bind:this={ref} class={cn(className)} data-slot="page-content" {...props}>
	{@render children?.()}
</main>
