import { type HandlerPlugin } from 'innet';
import type { SchemaProps } from '../../../types';
export type BinaryProps = SchemaProps<string> & {
    accept?: string;
    max?: number;
    min?: number;
};
export declare const binary: HandlerPlugin;
