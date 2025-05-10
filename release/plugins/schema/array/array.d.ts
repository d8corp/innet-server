import { type HandlerPlugin } from 'innet';
import { type BaseSchemaProps } from '../../../types';
export interface ArrayProps extends BaseSchemaProps<any[]> {
    children?: any;
}
export declare const array: HandlerPlugin;
