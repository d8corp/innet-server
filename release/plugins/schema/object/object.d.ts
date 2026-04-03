import { type HandlerPlugin } from 'innet';
import { type SchemaProps } from '../../../types';
export interface ObjectProps extends SchemaProps<object> {
    children?: any;
}
export declare const object: HandlerPlugin;
