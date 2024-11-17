<script lang="ts">
	import { base } from '$app/paths';
	import clsx from 'clsx';
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import ArrowIcon from './ArrowIcon.svelte';

	const variantStyles = {
		primary:
			'rounded-full bg-slate-900 py-1 px-3 text-white hover:bg-slate-700 dark:bg-orange-400/10 dark:text-orange-400 dark:ring-1 dark:ring-inset dark:ring-orange-400/20 dark:hover:bg-orange-400/10 dark:hover:text-orange-300 dark:hover:ring-orange-300',
		secondary:
			'rounded-full bg-slate-100 py-1 px-3 text-slate-900 hover:bg-slate-200 dark:bg-slate-800/40 dark:text-slate-400 dark:ring-1 dark:ring-inset dark:ring-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-300',
		filled:
			'rounded-full bg-slate-900 py-1 px-3 text-white hover:bg-slate-700 dark:bg-orange-500 dark:text-white dark:hover:bg-orange-400',
		outline:
			'rounded-full py-1 px-3 text-slate-700 ring-1 ring-inset ring-slate-900/10 hover:bg-slate-900/2.5 hover:text-slate-900 dark:text-slate-400 dark:ring-white/10 dark:hover:bg-white/5 dark:hover:text-white',
		text: 'text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500'
	};

	let {
		arrow,
		children,
		variant = 'primary',
		...props
	}: {
		arrow?: 'left' | 'right';
		class?: string;
		children: Snippet;
		variant?: keyof typeof variantStyles;
	} & (HTMLAnchorAttributes | (HTMLButtonAttributes & { href?: undefined })) = $props();

	let href = $derived.by(() => {
		const { href } = props;

		if (href === undefined || href === null || base === '') {
			// do nothing
		} else if (href.startsWith('/')) {
			return `${base}${href}`;
		} else {
			// do nothing
		}

		return href;
	});

	let klass = $derived.by(() =>
		clsx(
			'not-prose',
			'inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition',
			variantStyles[variant],
			props.class
		)
	);

	let tag = $derived.by(() => (href === null || href === undefined ? 'button' : 'a'));
</script>

<svelte:element this={tag} {...{ ...props, href }} class={klass}>
	{#if arrow === 'left'}
		<ArrowIcon
			class={clsx(
				'mt-0.5 h-5 w-5',
				variant === 'text' ? 'relative top-px' : '',
				'-ml-1 rotate-180'
			)}
		/>
	{/if}
	{@render children?.()}
	{#if arrow === 'right'}
		<ArrowIcon
			class={clsx('mt-0.5 h-5 w-5', variant === 'text' ? 'relative top-px' : '', '-mr-1')}
		/>
	{/if}
</svelte:element>
