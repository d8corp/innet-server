import { type Handler } from 'innet';
import { Context } from '@innet/jsx';
export declare const requestHandlerContext: Context<Handler, Handler | undefined>;
export declare function useRequestHandler(): Handler;
