import { type HandlerPlugin } from 'innet';
import { type BaseSchemaProps } from '../../../types';
export interface ArrayProps extends BaseSchemaProps<any[]> {
    children?: any;
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
}
export declare const array: HandlerPlugin;
