import { type ObjectType, type SchemaObject, type ValuesSchemaProps } from '../../types';
type TypeMap<T extends ObjectType> = T extends 'number' | 'integer' ? number : T extends 'string' ? string : T extends 'object' ? object : T extends 'array' ? any[] : T extends 'boolean' ? boolean : T extends 'null' ? null : unknown;
export declare function useSchemaType<T extends ObjectType>(type: T, { values, ref, example, examples, ...options }?: undefined | ValuesSchemaProps<TypeMap<T>>): SchemaObject | undefined;
export {};
