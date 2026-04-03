import { type HandlerPlugin } from 'innet';
import { type SchemaProps } from '../../../types';
import { type DateFormat, type DefaultDateFormat } from '../../../utils';
export type DateProps = SchemaProps<DateFormat, DefaultDateFormat> & {
    max?: DateFormat;
    min?: DateFormat;
};
export declare const date: HandlerPlugin;
