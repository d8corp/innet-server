import { type HandlerPlugin } from 'innet';
import { type IntegerFormats, type ValuesSchemaProps } from '../../../types';
export interface IntegerProps extends ValuesSchemaProps<number | bigint> {
    format?: IntegerFormats;
    min?: number | bigint;
    max?: number | bigint;
}
export declare const integer: HandlerPlugin;
