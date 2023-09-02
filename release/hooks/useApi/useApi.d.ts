import { Context } from '@innet/jsx';
import { type Document, type Endpoints, type Fallback, type RequestPlugin } from '../../types';
import { type Rule } from '../../utils';
export interface ApiContext {
    docs: Document;
    endpoints: Endpoints;
    prefix: string;
    requestPlugins: Set<RequestPlugin>;
    fallback?: Fallback;
    refRules: Record<string, Rule>;
}
export declare const apiContext: Context<ApiContext, ApiContext | undefined>;
export declare function useApi(): ApiContext;
