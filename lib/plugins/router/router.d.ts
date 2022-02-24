import { Children, Component, Props } from '@innet/jsx';
import { Handler } from 'innet';
import { Action } from '../../action';
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
export interface RouterComponent extends Component {
    router: Router;
}
export interface RouterComponentConstructor {
    new (props?: Props, children?: Children, handler?: Handler): RouterComponent;
    [key: string]: any;
}
export declare function withRouter<T extends RouterComponentConstructor>(target: T): T;
export declare function router({ props, children }: {
    props: any;
    children: any;
}, handler: any): any;
