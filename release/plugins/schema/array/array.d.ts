import { type HandlerPlugin } from 'innet';
import { type SchemaProps } from '../../../types';
export type ArrayProps = SchemaProps<any[]> & {
    children?: JSX.Element;
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
};
export declare const array: HandlerPlugin;
