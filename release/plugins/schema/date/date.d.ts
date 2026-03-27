import { type HandlerPlugin } from 'innet';
import { type ValuesSchemaProps } from '../../../types';
import { type DateFormat } from '../../../utils';
export interface DateProps extends ValuesSchemaProps<DateFormat> {
    max?: DateFormat;
    min?: DateFormat;
}
export declare const date: HandlerPlugin;
