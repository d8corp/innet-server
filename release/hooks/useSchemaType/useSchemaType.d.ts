import { type ObjectType, type SchemaObject, type ValuesSchemaProps } from '../../types';
export type SchemaType = ObjectType | 'any';
type TypeMap<T extends SchemaType> = T extends 'number' | 'integer' ? number : T extends 'string' ? string : T extends 'object' ? object : T extends 'array' ? any[] : T extends 'boolean' ? boolean : T extends 'null' ? null : T extends 'any' ? any : unknown;
export declare function useSchemaType<T extends SchemaType>(type: T, { values, ref, example, examples, ...options }?: undefined | ValuesSchemaProps<TypeMap<T>>): SchemaObject | undefined;
export {};
