import { type HandlerPlugin } from 'innet';
import { type SchemaProps } from '../../../types';
export type TupleProps = SchemaProps<any[]> & {
    children?: JSX.Element;
};
export declare const tuple: HandlerPlugin;
