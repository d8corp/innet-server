export interface CmsProps {
    dir?: string;
    prefix?: string;
}
export interface CmsJsxElement {
    props: CmsProps;
}
export declare function cms({ props }: CmsJsxElement, handler: any): Promise<unknown>;
