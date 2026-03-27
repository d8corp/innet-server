import { type HandlerPlugin } from 'innet';
export interface FieldProps {
    children?: any;
    deprecated?: boolean;
    key: string;
    optional?: boolean;
    readOnly?: boolean;
    writeOnly?: boolean;
}
export declare const field: HandlerPlugin;
