import { Handler } from 'innet';
export interface ProxyProps {
    to: string;
}
export declare function proxy({ props: { to, secure } }: {
    props: {
        to: any;
        secure?: boolean;
    };
}, handler: Handler): symbol;
