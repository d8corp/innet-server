import { type HandlerPlugin } from 'innet';
import { type SchemaProps } from '../../../types';
export interface UuidProps extends SchemaProps<string> {
    default?: 'new' | string;
}
export declare const uuid: HandlerPlugin;
