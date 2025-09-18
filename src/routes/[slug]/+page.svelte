<script lang="ts">
	import * as Layout from '$lib/components/layout/post';
	import Markdown from '$lib/components/markdown/markdown.svelte';
	import * as Post from '$lib/providers/post';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let { post } = $derived(data);
</script>

<Post.Provider {post}>
	<Layout.Root>
		<Markdown ast={post.ast} />
	</Layout.Root>
</Post.Provider>
