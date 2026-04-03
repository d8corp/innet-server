import { type HandlerPlugin } from 'innet';
import { type SchemaProps } from '../../../types';
export interface BooleanProps extends SchemaProps<boolean> {
    const?: boolean;
}
export declare const boolean: HandlerPlugin;
