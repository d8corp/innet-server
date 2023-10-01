import { type HandlerPlugin } from 'innet';
export interface EnvProps {
    is: string | string[];
    of?: string;
}
export declare const env: HandlerPlugin;
