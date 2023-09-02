/// <reference types="node" />
import { Context } from '@innet/jsx';
import { type ServerResponse } from 'http';
export declare const responseContext: Context<ServerResponse<import("http").IncomingMessage>, ServerResponse<import("http").IncomingMessage> | undefined>;
export declare function useResponse(): ServerResponse<import("http").IncomingMessage> | undefined;
