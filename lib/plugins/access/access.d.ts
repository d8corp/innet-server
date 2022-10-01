import { Handler } from 'innet';
import { Context } from '@innet/jsx';
export interface AccessProps {
    role?: any;
}
export interface AccessJsxElement {
    props: AccessProps;
    children?: any;
}
export interface AccessContext {
    handleRole?: (role: any, handler: Handler) => any;
}
export declare const accessContext: Context<AccessContext, AccessContext>;
export declare function access({ props, children }: AccessJsxElement, handler: any): any;
