<script lang="ts">
	import { base } from '$app/paths';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	let { children, href: _href, ...props }: HTMLAnchorAttributes = $props();

	let href = $derived.by(() => {
		if (_href === undefined || _href === null || base === '') {
			// do nothing
		} else if (_href.startsWith('/')) {
			return `${base}${_href}`;
		} else {
			// do nothing
		}

		return _href;
	});
</script>

<svelte:element this={'a'} {...props} {href}>{@render children?.()}</svelte:element>
