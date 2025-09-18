import type { HTMLAttributes } from 'svelte/elements';

export type ElementProps<
	T extends object = object,
	E extends HTMLElement = HTMLElement
> = WithElementProps<WithElementRef<T, E>, E>;

export type AsElementWithoutChildren<
	T extends object = object,
	E extends HTMLElement = HTMLElement
> = ElementProps<WithoutChildren<T>, E>;

type WithoutChildren<T extends object> = Omit<T, 'children'>;

type WithElementProps<T extends object, E extends HTMLElement = HTMLElement> = T &
	HTMLAttributes<E>;

type WithElementRef<T extends object, E extends HTMLElement = HTMLElement> = T & { ref?: E | null };
