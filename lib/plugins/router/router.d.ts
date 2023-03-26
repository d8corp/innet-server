import { type Action } from 'src/utils';
export declare type Methods = 'GET' | 'HEAD' | 'POST' | 'DELETE' | 'PUT' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';
export interface RouterProps {
    method?: Methods;
    path?: string;
    prefix?: string;
    ish?: boolean;
    onMatch?: (action: Action) => void;
}
export declare function getMatchReg(props: RouterProps): string;
export interface Router {
    prefix?: string;
    params?: Record<string, string>;
}
export declare const ROUTER: string;
export declare function useRouter(): Router;
export declare function router({ props, children }: {
    props: any;
    children: any;
}, handler: any): any;
