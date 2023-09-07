import { type HandlerPlugin } from 'innet';
export declare const redirectStatuses: {
    multipleChoices: number;
    movedPermanently: number;
    found: number;
    seeOther: number;
    notModified: number;
    useProxy: number;
    temporaryRedirect: number;
    permanentRedirect: number;
};
export type RedirectStatuses = keyof typeof redirectStatuses;
export interface RedirectProps {
    to: string;
    encode?: boolean;
    status?: number | RedirectStatuses;
}
export declare const redirect: HandlerPlugin;
