import { type ObjectType, type SchemaObject, type ValuesSchemaProps } from '../../types';
export type SchemaType = 'any' | ObjectType;
type TypeMap<T extends SchemaType> = T extends 'integer' | 'number' ? number : T extends 'string' ? string : T extends 'object' ? object : T extends 'array' ? any[] : T extends 'boolean' ? boolean : T extends 'null' ? null : T extends 'any' ? any : unknown;
export declare function useSchemaType<T extends SchemaType>(type: T, { example, examples, ref, values, ...options }?: ValuesSchemaProps<TypeMap<T>> | undefined): SchemaObject | undefined;
export {};
