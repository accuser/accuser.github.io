export type Directives<T extends import('mdast-util-directive').Directives> = {
	[K in T['name']]: import('svelte').Component<Extract<T, { name: K }>> | undefined;
};
