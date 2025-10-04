import { isRoot } from '@accuser/mdast-util-type-guards';
import type { Root } from 'mdast';
import * as v from 'valibot';

export const ASTSchema = v.custom<Root>(isRoot);

export type AST = v.InferOutput<typeof ASTSchema>;

export const isAST = (input: unknown): input is Root => v.is(ASTSchema, input);
export const validateAST = (input: unknown) => v.parse(ASTSchema, input);
