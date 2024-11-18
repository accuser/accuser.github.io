<script lang="ts">
	import Octicon from './Octicon.svelte';

	const THEME_KEY = 'theme';

	const themes = {
		light: 'light',
		dark: 'dark'
	} as const;

	type Theme = keyof typeof themes;

	let theme = $state<Theme>();
	let otherTheme = $derived(theme === 'dark' ? themes.light : themes.dark);

	$effect(() => {
		if (theme === themes.light) {
			document.documentElement.classList.remove('dark');
		} else if (theme === themes.dark) {
			document.documentElement.classList.add('dark');
		}
	});

	const handleChange = ({ matches }: MediaQueryListEvent): void => {
		theme = matches ? themes.dark : themes.light;
	};

	$effect.pre(() => {
		const persistedValue = localStorage.getItem(THEME_KEY);
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

		if (persistedValue && persistedValue in themes) {
			theme = themes[persistedValue as Theme];
		} else if (prefersDark.matches) {
			theme = 'dark';
		}

		prefersDark.addEventListener('change', handleChange);

		return () => {
			prefersDark.removeEventListener('change', handleChange);
		};
	});

	const toggleTheme = () => {
		theme = otherTheme;
		localStorage.setItem(THEME_KEY, theme);
	};
</script>

<button
	type="button"
	class="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-slate-900/5 dark:hover:bg-white/5"
	aria-label={`Switch to ${otherTheme} theme`}
	onclick={() => toggleTheme()}
>
	<Octicon name="sun" class="h-5 w-5 fill-slate-900 dark:hidden" />
	<Octicon name="moon" class="hidden h-5 w-5 fill-white dark:block" />
</button>
