import type { Node } from 'unist';

type Components<T extends Node> = {
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

export type { Components };
