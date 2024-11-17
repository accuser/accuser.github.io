---
title: Link Component
---

I've had various incarnations of a Svelte `Link` component (informed by my prior Next.js experience) in my projects. With Svelte 5, I've finally settled on a version that I'm happy with: a `Link` component that can be used in place of an HTML anchor tag (because it exposes all of the HTML anchor tag attributes) but is able to prefex a base path to the `href` attribute for absolute paths.

Here's the `Link` component I came up with:

```svelte
<script lang="ts">
	import { base } from '$app/paths';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	let { children, ...props }: HTMLAnchorAttributes = $props();

	let href = $derived(props.href?.startsWith('/') ? `${base}${props.href}` : props.href);
</script>

<svelte:element this={'a'} {...props} {href}>{@render children?.()}</svelte:element>
```

The typing of the `props` object is what makes this work. It would be better if the `$props()` rune could be typed explicitly, but I'm not going to worry about that.

The `base` import is a store that contains the base path of the site, e.g. `''` (empty string) for local development and `'/my-site'` for production). The `href` attribute is derived from the `props` object, and if it starts with a `'/'` (i.e., absolute), the `base` path is prefixed to it.
