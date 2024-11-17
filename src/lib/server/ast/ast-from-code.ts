import { all, createStarryNight } from '@wooorm/starry-night';

const starryNight = await createStarryNight(all);

const astFromCode = (value: string, lang: string | null | undefined) => {
	if (lang) {
		const scope = starryNight.flagToScope(lang);

		if (scope) {
			return starryNight.highlight(value, scope);
		}
	}
};

export { astFromCode as default };
