<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Link from '$lib/components/Link.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import { clsx } from 'clsx';

	let {
		class: className,
		links = []
	}: {
		class?: string | null;
		links: Link[];
	} = $props();
</script>

<div
	class={clsx(
		className,
		'fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80',
		'backdrop-blur-sm lg:left-72 xl:left-80 dark:backdrop-blur',
		'bg-white/[var(--bg-opacity-light)] dark:bg-slate-900/[var(--bg-opacity-dark)]'
	)}
>
	<div class={clsx('absolute inset-x-0 top-full h-px transition')}></div>

	<!-- <Search /> -->
	<div class="flex items-center gap-5 lg:hidden">
		<Link href="/" aria-label="Home">
			<Logo class="h-6" />
		</Link>
	</div>

	<div class="flex items-center gap-5">
		<div class="hidden md:block md:h-5 md:w-px md:bg-slate-900/10 md:dark:bg-white/15"></div>

		{#each links as { href, text }}
			<Link {href}>{text}</Link>
		{/each}

		<div class="flex gap-4">
			<ThemeToggle />
		</div>

		<div class="hidden min-[416px]:contents">
			<Button href="#">Sign in</Button>
		</div>
	</div>
</div>
