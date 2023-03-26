import { Handler } from 'innet';
import { Action, ActionParams } from '../../utils';
export interface ActionProps extends ActionParams {
    unknownError?: string;
    onError?: (e: Error, action: Action) => any;
}
export declare function action({ props, children }: {
    props?: ActionProps;
    children: any;
}, handler: Handler): void;
