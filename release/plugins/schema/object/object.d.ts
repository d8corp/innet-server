import { type HandlerPlugin } from 'innet';
import { type SchemaProps } from '../../../types';
export type ObjectProps = SchemaProps<object> & {
    children?: JSX.Element;
};
export declare const object: HandlerPlugin;
