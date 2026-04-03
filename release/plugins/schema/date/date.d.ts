import { type HandlerPlugin } from 'innet';
import { type SchemaProps } from '../../../types';
import { type DateFormat } from '../../../utils';
export interface DateProps extends SchemaProps<DateFormat> {
    max?: DateFormat;
    min?: DateFormat;
}
export declare const date: HandlerPlugin;
