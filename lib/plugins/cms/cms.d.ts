import { Props } from '@innet/jsx';
export interface CmsProps extends Props {
    dir?: string;
    prefix?: string;
}
export interface CmsJsxElement {
    props: CmsProps;
}
export declare function cms({ props }: CmsJsxElement, handler: any): Promise<unknown>;
