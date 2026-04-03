import { type HandlerPlugin } from 'innet';
import { type SchemaProps } from '../../../types';
export type UuidProps = SchemaProps<string, 'new' | string>;
export declare const uuid: HandlerPlugin;
