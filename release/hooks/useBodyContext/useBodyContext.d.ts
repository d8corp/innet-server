import { Context } from '@innet/jsx';
export interface BodyContext {
    useFile: () => void;
}
export declare const bodyContext: Context<BodyContext, BodyContext | undefined>;
export declare function useBodyContext(): BodyContext;
