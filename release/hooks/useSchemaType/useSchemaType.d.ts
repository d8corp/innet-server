import { type ObjectType, type SchemaObject, type SchemaProps } from '../../types';
export type SchemaType = 'any' | ObjectType;
export type SchemaTypeMap<T extends SchemaType> = T extends 'integer' | 'number' ? number : T extends 'string' ? string : T extends 'object' ? object : T extends 'array' ? any[] : T extends 'boolean' ? boolean : T extends 'null' ? null : T extends 'any' ? any : unknown;
export declare function useSchemaType<T extends SchemaType>(type: T, { example, examples, nullable, ref, value, values, ...options }?: SchemaProps<SchemaTypeMap<T>> | undefined): SchemaObject | undefined;
