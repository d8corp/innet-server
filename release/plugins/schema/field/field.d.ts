import { type HandlerPlugin } from 'innet';
export interface FieldProps {
    deprecated?: boolean;
    key: string;
    optional?: boolean;
}
export declare const field: HandlerPlugin;
