<script lang="ts" module>
	declare module 'mdast' {
		interface TableRowData {
			align?: import('mdast').AlignType[] | null;
		}
	}
</script>

<script lang="ts">
	import type { TableRow } from 'mdast';
	import Node from './Node.svelte';

	let { children, data }: TableRow = $props();

	let align = $derived(data?.align);

	let columns = $derived.by(() =>
		children.map((child, index) => ({
			...child,
			data: { ...child.data, align: align ? align[index] : undefined }
		}))
	);
</script>

<tr
	>{#each columns as column}<Node {...column} />{/each}</tr
>
