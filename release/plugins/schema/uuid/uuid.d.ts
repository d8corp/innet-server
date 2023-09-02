import { type HandlerPlugin } from 'innet';
import { type ValuesSchemaProps } from '../../../types';
export interface UuidProps extends ValuesSchemaProps<string> {
    default?: 'new' | string;
}
export declare const uuid: HandlerPlugin;
