<script lang="ts">
	import BlueskyIcon from './BlueskyIcon.svelte';
	import GitHubIcon from './GitHubIcon.svelte';
	import SocialLink from './SocialLink.svelte';

	let year = $state(new Date().getFullYear());
</script>

<footer class="mx-auto w-full max-w-2xl space-y-10 pb-16 lg:max-w-5xl">
	<div
		class="flex flex-col items-center justify-between gap-5 border-t border-slate-900/5 pt-8 sm:flex-row dark:border-white/5"
	>
		<p class="text-xs text-slate-600 dark:text-slate-400">
			&copy; Copyright {year}. All rights reserved.
		</p>
		<div class="flex gap-4">
			<SocialLink href="https://github.com/accuser" icon={GitHubIcon}
				>Follow me on GitHub</SocialLink
			>
			<SocialLink href="https://bsky.app/profile/accuser.dev" icon={BlueskyIcon}
				>Follow me on Bluesky</SocialLink
			>
		</div>
	</div>
</footer>
