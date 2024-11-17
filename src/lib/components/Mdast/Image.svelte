<script lang="ts">
	import type { Image } from 'mdast';

	let { alt, url, title }: Image = $props();
</script>

<img src={url} {alt} {title} />
