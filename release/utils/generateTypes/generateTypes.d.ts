import { type Document, type SchemaObject } from '../../types';
export declare function generateSchemaTypes(schema: SchemaObject, spaces?: number): string;
export declare function generateTypes(docs: Document, namespace?: string): string;
