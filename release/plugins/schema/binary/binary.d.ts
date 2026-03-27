import { type HandlerPlugin } from 'innet';
export interface BinaryProps {
    accept?: string;
    deprecated: boolean;
    description?: string;
    max?: number;
    min?: number;
    readOnly: boolean;
    ref?: string;
    title?: string;
    writeOnly: boolean;
}
export declare const binary: HandlerPlugin;
