import { type HandlerPlugin } from 'innet';
export interface FieldProps {
    children?: any;
    deprecated?: boolean;
    description?: string;
    key: string;
    optional?: boolean;
    readOnly?: boolean;
    title?: string;
    writeOnly?: boolean;
}
export declare const field: HandlerPlugin;
