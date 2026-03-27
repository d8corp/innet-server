import { type HandlerPlugin } from 'innet';
export interface BinaryProps {
    accept?: string;
    description?: string;
    max?: number;
    min?: number;
    ref?: string;
}
export declare const binary: HandlerPlugin;
