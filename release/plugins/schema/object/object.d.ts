import { type HandlerPlugin } from 'innet';
import { type BaseSchemaProps } from '../../../types';
export interface ObjectProps extends BaseSchemaProps<object> {
    children?: any;
}
export declare const object: HandlerPlugin;
