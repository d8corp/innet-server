import { type HandlerPlugin } from 'innet';
import { type SchemaProps } from '../../../types';
export interface ArrayProps extends SchemaProps<any[]> {
    children?: any;
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
}
export declare const array: HandlerPlugin;
