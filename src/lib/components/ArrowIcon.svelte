<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';

	let props: SVGAttributes<SVGElement> = $props();
</script>

<svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
	<path
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
	/>
</svg>
