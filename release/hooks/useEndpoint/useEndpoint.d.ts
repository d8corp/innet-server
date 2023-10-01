import { Context } from '@innet/jsx';
import { type EndpointProps } from '../../plugins';
import type { Endpoint, OperationObject } from '../../types';
export interface EndpointContext {
    endpoint: Endpoint;
    operation: OperationObject;
    props: EndpointProps;
}
export declare const endpointContext: Context<EndpointContext, EndpointContext | undefined>;
export declare function useEndpoint(): EndpointContext;
