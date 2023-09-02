import { type HandlerPlugin } from 'innet';
import { type ValuesSchemaProps } from '../../../types';
export interface StringProps extends ValuesSchemaProps<string> {
    min?: number;
    max?: number;
    pattern?: string | RegExp;
    patternId?: string;
}
export declare const string: HandlerPlugin;
