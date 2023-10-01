import { type HandlerPlugin } from 'innet';
import { type ValuesSchemaProps } from '../../../types';
export interface StringProps extends ValuesSchemaProps<string> {
    max?: number;
    min?: number;
    pattern?: RegExp | string;
    patternId?: string;
}
export declare const string: HandlerPlugin;
