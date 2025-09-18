<script lang="ts">
	import { cn, type ElementProps } from '$lib/utils';

	let { children, class: className, ref = $bindable(null), ...props }: ElementProps = $props();
</script>

<footer bind:this={ref} class={cn(className)} data-slot="site-footer" {...props}>
	{@render children?.()}
</footer>
