export interface CmsProps {
    dir?: string;
    prefix?: string;
}
export interface CmsJsxElement {
    props: CmsProps;
    children?: any;
}
export declare function cms({ props, children }: CmsJsxElement, handler: any): Promise<unknown>;
