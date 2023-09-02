import { type HandlerPlugin } from 'innet';
import { type ValuesSchemaProps } from '../../../types';
import { type DateFormat } from '../../../utils';
export interface DateProps extends ValuesSchemaProps<DateFormat> {
    min?: DateFormat;
    max?: DateFormat;
}
export declare const date: HandlerPlugin;
