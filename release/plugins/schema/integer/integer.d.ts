import { type HandlerPlugin } from 'innet';
import { type IntegerFormats, type ValuesSchemaProps } from '../../../types';
export interface IntegerProps extends ValuesSchemaProps<bigint | number> {
    format?: IntegerFormats;
    max?: bigint | number;
    min?: bigint | number;
}
export declare const integer: HandlerPlugin;
