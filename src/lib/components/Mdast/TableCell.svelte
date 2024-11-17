<script lang="ts" module>
	declare module 'mdast' {
		interface TableCellData {
			align?: import('mdast').AlignType | null;
		}
	}
</script>

<script lang="ts">
	import type { TableCell } from 'mdast';
	import Node from './Node.svelte';

	let { children, data }: TableCell = $props();

	let align = $derived(data?.align);
</script>

<td {align}
	>{#each children as node}<Node {...node} />{/each}</td
>
