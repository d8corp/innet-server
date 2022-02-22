export declare const successStatuses: {
    readonly ok: 200;
    readonly created: 201;
    readonly accepted: 202;
    readonly outside: 203;
    readonly noContent: 204;
    readonly resetContent: 205;
    readonly partialContent: 206;
    readonly multiStatus: 207;
    readonly alreadyReported: 208;
};
export declare type SuccessStatuses = keyof typeof successStatuses;
export interface SuccessProps {
    status?: SuccessStatuses | number;
}
export declare function success({ props, children }: {
    props: any;
    children: any;
}, handler: any): any;
