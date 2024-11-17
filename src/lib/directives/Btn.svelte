<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Node from '$lib/components/Mdast/Node.svelte';
	import type { TextDirective } from 'mdast-util-directive';
	import type { ComponentProps } from 'svelte';

	let { attributes, children }: TextDirective = $props();

	let { href, arrow, variant } = attributes as unknown as ComponentProps<typeof Button>;
</script>

<Button {arrow} {href} {variant}
	>{#each children as node}<Node {...node} />{/each}</Button
>
