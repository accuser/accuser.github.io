<script lang="ts">
	import { base } from '$app/paths';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	let { children, ...props }: HTMLAnchorAttributes = $props();

	let href = $derived(props.href?.startsWith('/') ? `${base}${props.href}` : props.href);
</script>

<svelte:element this={'a'} {...props} {href}>{@render children?.()}</svelte:element>
