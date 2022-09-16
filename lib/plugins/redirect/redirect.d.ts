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
export interface RedirectProps {
    to: string;
    encode?: boolean;
    status?: number | keyof typeof redirectStatuses;
}
export declare function redirect({ props, children }: {
    props: any;
    children: any;
}, handler: any): any;
