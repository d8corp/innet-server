/// <reference types="node" />
import { Context } from '@innet/jsx';
import { type IncomingMessage } from 'http';
export declare const requestContext: Context<IncomingMessage, IncomingMessage | undefined>;
export declare function useRequest(): IncomingMessage | undefined;
