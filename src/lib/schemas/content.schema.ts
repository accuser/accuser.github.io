import * as v from 'valibot';
import { PageSchema } from './page.schema';
import { PostSchema } from './post.schema';

export const ContentSchema = v.variant('type', [PageSchema, PostSchema]);

export type Content = v.InferOutput<typeof ContentSchema>;

export const validateContent = (input: unknown) => v.parse(ContentSchema, input);
