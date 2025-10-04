<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let { category } = $derived(data);
</script>

{JSON.stringify(category)}
