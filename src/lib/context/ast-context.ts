import type { AstContext } from '$lib/types/ast-context.js';
import { getContext, hasContext, setContext } from 'svelte';

const AST_CONTEXT_TOKEN = Symbol('AST_CONTEXT_TOKEN');

const getAstContext = () => {
	if (hasContext(AST_CONTEXT_TOKEN)) {
		return getContext<AstContext>(AST_CONTEXT_TOKEN);
	}

	throw new Error('AstContext not found');
};

const setAstContext = (context: AstContext) => setContext(AST_CONTEXT_TOKEN, context);

export { getAstContext, setAstContext };
