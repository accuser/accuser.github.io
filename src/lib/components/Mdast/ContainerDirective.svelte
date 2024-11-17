<script lang="ts">
	import { containerDirectives } from '$lib/defaults/container-directives';
	import type { ContainerDirective } from 'mdast-util-directive';
	import Node from './Node.svelte';

	let { children, name, ...props }: ContainerDirective = $props();

	let Directive = $derived(containerDirectives[name as keyof typeof containerDirectives]);
</script>

{#if Directive}
	<Directive {children} {name} {...props} />
{:else}
	<div class={name}>
		{#each children as node}<Node {...node} />{/each}
	</div>
{/if}
