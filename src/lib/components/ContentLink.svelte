<script lang="ts">
	import type { Content } from '$lib/providers/content';
	import { getSiteContext } from '$lib/providers/site';
	import { type WithElementRef } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';
	import Link from './Link.svelte';

	let {
		class: className,
		content,
		ref = $bindable(null),
		...props
	}: WithElementRef<
		Omit<HTMLAttributes<HTMLAnchorElement>, 'children' | 'href'>,
		HTMLAnchorElement
	> & {
		content: Content;
	} = $props();

	const { url } = getSiteContext();

	let {
		attributes: { title },
		links: { self }
	} = $derived(content);
</script>

<Link href={self} {...props}>{title}</Link>
