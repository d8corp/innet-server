import { Resources } from '../../action';
export interface Formatter<V> {
    (value?: any): V;
}
export declare type FormatterMap<B> = {
    [K in keyof B]?: Formatter<B[K]>[];
};
export interface FormatterProps<T> {
    map: FormatterMap<T>;
    resource?: Resources;
}
export interface FormatterJsxElement<T> {
    props: FormatterProps<T>;
    children?: any;
}
export declare function formatter<T extends object, E extends object>({ props, children }: FormatterJsxElement<T>, handler: any): any;
