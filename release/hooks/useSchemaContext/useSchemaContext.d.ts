import { Context } from '@innet/jsx';
import { type SchemaObject } from '../../types';
export type SchemaContext = SchemaObject | SchemaObject[];
export declare const schemaContext: Context<SchemaContext, SchemaContext | undefined>;
export declare function useSchemaContext(): SchemaContext | undefined;
