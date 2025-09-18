<script lang="ts">
	import { mdastComponents } from '@accuser/svelte-mdast';
	import { Unist } from '@accuser/svelte-unist';
	import type { Root } from 'mdast';

	let { ast }: { ast: Root } = $props();
</script>

<Unist {ast} components={{ ...mdastComponents }} />
