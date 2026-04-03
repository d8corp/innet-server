import { type HandlerPlugin } from 'innet';
import { type SchemaProps } from '../../../types';
export interface TupleProps extends SchemaProps<any[]> {
    children?: any;
}
export declare const tuple: HandlerPlugin;
