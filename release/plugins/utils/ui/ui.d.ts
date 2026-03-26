import { type HandlerPlugin } from 'innet';
export declare const uiPresets: {
    rapidoc: string;
    redoc: string;
    scalar: string;
    swagger: string;
};
export interface UiProps {
    html?: string;
    params?: Record<string, any>;
    path?: string;
}
export declare const ui: HandlerPlugin;
