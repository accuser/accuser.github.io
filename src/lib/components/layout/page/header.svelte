<script lang="ts">
	import { cn, type ElementProps } from '$lib/utils';

	let { children, class: className, ref = $bindable(null), ...props }: ElementProps = $props();
</script>

<header bind:this={ref} class={cn(className)} data-slot="page-header" {...props}>
	{@render children?.()}
</header>
