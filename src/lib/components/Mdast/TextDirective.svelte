<script lang="ts">
	import { textDirectives } from '$lib/defaults/text-directives';
	import type { TextDirective } from 'mdast-util-directive';
	import Node from './Node.svelte';

	let { children, name, ...props }: TextDirective = $props();

	let Directive = $derived(textDirectives[name as keyof typeof textDirectives]);
</script>

{#if Directive}<Directive {children} {name} {...props} />{:else}<span class={name}
		>{#each children as node}<Node {...node} />{/each}</span
	>{/if}
