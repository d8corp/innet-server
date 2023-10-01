import { type HandlerPlugin } from 'innet';
export declare const redirectStatuses: {
    found: number;
    movedPermanently: number;
    multipleChoices: number;
    notModified: number;
    permanentRedirect: number;
    seeOther: number;
    temporaryRedirect: number;
    useProxy: number;
};
export type RedirectStatuses = keyof typeof redirectStatuses;
export interface RedirectProps {
    encode?: boolean;
    status?: RedirectStatuses | number;
    to: string;
}
export declare const redirect: HandlerPlugin;
