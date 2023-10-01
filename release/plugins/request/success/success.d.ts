import { type HandlerPlugin } from 'innet';
export declare const successStatuses: {
    readonly accepted: 202;
    readonly alreadyReported: 208;
    readonly created: 201;
    readonly multiStatus: 207;
    readonly noContent: 204;
    readonly ok: 200;
    readonly outside: 203;
    readonly partialContent: 206;
    readonly resetContent: 205;
};
export type SuccessStatuses = keyof typeof successStatuses;
export interface SuccessProps {
    status?: SuccessStatuses | number;
    type?: string;
}
export declare const success: HandlerPlugin;
