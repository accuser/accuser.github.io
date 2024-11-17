<script lang="ts">
	import { base } from '$app/paths';

	let { children, ...props }: import('svelte/elements').HTMLAnchorAttributes = $props();

	let href = $derived.by(() => {
		const { href } = props;

		if (href && href.startsWith('/')) {
			return `${base}${href}`;
		} else {
			return href;
		}
	});
</script>

<svelte:element this={'a'} {...props} {href}>{@render children?.()}</svelte:element>
