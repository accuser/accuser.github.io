<script lang="ts">
	import Link from '$lib/components/Link.svelte';
</script>

<main
	class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-slate-900"
>
	<div class="text-center">
		<p class="text-base font-semibold text-orange-600">404</p>
		<h1 class="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">Not Found</h1>
		<p class="mt-6 text-base leading-7 text-slate-600">
			Sorry, we couldn&rsquo;t find the page you&rsquo;re looking for.
		</p>
		<div class="mt-10 flex items-center justify-center gap-x-6">
			<Link
				href="/"
				class="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
				>Go back home</Link
			>
		</div>
	</div>
</main>
