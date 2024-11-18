<script lang="ts">
	import octicons, { type IconName, type IconSize } from '@primer/octicons';
	import type { SVGAttributes } from 'svelte/elements';

	let {
		class: class_,
		name,
		size = 24,
		...props
	}: {
		name: IconName;
		size?: IconSize;
	} & SVGAttributes<SVGElement> = $props();

	let svg = octicons[name].toSVG({
		'aria-label': props['aria-label'] ?? undefined,
		class: class_ ?? undefined,
		height: size,
		width: size
	});
</script>

{@html svg}
