import { ValidationMap, ValidationResponse } from '@cantinc/utils';
import { Resources } from '../../action';
export interface ValidationProps<T> {
    map: ValidationMap<T>;
    resource?: Resources;
}
export interface ValidationJsxElement<T> {
    props: ValidationProps<T>;
    children?: any;
}
export interface ValidationContext {
    handleError: (e: ValidationResponse<any>) => any;
}
export declare function validation<T extends object, E extends object>({ props, children }: ValidationJsxElement<T>, handler: any): Promise<any>;
