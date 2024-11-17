<script lang="ts">
	import { base } from '$app/paths';
	import '../app.css';

	const { children } = $props();
</script>

{@render children?.()}
