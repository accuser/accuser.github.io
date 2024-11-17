import type { Node } from 'unist';

export type Components<T extends Node> = {
	[K in T['type']]:
		| import('svelte').Component<
				Extract<
					T,
					{
						type: K;
					}
				>
		  >
		| undefined;
};
