import { type HandlerPlugin } from 'innet';
import { type BaseSchemaProps } from '../../../types';
export interface TupleProps extends BaseSchemaProps<any[]> {
    children?: any;
}
export declare const tuple: HandlerPlugin;
