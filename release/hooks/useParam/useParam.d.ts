import { Context } from '@innet/jsx';
import { type ParamProps } from '../../plugins';
export interface ParamContext {
    props: ParamProps;
}
export declare const paramContext: Context<ParamContext, ParamContext | undefined>;
export declare function useParam(): ParamContext;
