<script lang="ts">
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Link from '$lib/components/Link.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import SectionProvider from '$lib/providers/SectionProvider.svelte';
	import type { SiteConfig } from '$lib/types/site-config';
	import type { Snippet } from 'svelte';

	let {
		links = [],
		sections = [],
		children
	}: Partial<SiteConfig> & { children: Snippet } = $props();

	let pathname = $derived($page.url.pathname);
</script>

<SectionProvider {sections}>
	<div class="h-full lg:ml-72 xl:ml-80">
		<header class="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex">
			<div
				class="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-slate-900/10 lg:px-6 lg:pb-8 lg:pt-4 xl:w-80 lg:dark:border-white/10"
			>
				<div class="hidden lg:flex">
					<Link href="/" aria-label="Home">
						<Logo class="h-6" />
					</Link>
				</div>
				<Header {links} />
				<!-- <Navigation class="hidden lg:mt-10 lg:block" /> -->
			</div>
		</header>

		<div class="relative flex h-full flex-col px-4 pt-14 sm:px-6 lg:px-8">
			<main class="flex-auto">
				{@render children?.()}
			</main>
			<Footer />
		</div>
	</div>
</SectionProvider>
