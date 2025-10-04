<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index.js';

	let { children } = $props();
</script>

<Badge variant="default">{@render children?.()}</Badge>
