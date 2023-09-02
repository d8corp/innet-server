import { Context } from '@innet/jsx';
import { type EndpointProps } from '../../plugins';
import type { Endpoint, OperationObject } from '../../types';
export interface EndpointContext {
    operation: OperationObject;
    props: EndpointProps;
    endpoint: Endpoint;
}
export declare const endpointContext: Context<EndpointContext, EndpointContext | undefined>;
export declare function useEndpoint(): EndpointContext;
