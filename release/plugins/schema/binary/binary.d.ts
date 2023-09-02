import { type HandlerPlugin } from 'innet';
export interface BinaryProps {
    ref?: string;
    description?: string;
    accept?: string;
    min?: number;
    max?: number;
}
export declare const binary: HandlerPlugin;
