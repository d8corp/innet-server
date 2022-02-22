import { Handler } from 'innet';
export interface HeaderProps {
    name: string;
    value: string;
}
export declare function header({ props: { name, value }, children }: {
    props: {
        name: any;
        value: any;
    };
    children: any;
}, handler: Handler): any;
