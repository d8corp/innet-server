/// <reference types="node" />
/// <reference types="node" />
import { Context } from '@innet/jsx';
import { type Server as HttpServer } from 'http';
import { type Server as HttpsServer } from 'https';
export declare const serverContext: Context<HttpServer<typeof import("http").IncomingMessage, typeof import("http").ServerResponse> | HttpsServer<typeof import("http").IncomingMessage, typeof import("http").ServerResponse>, HttpServer<typeof import("http").IncomingMessage, typeof import("http").ServerResponse> | HttpsServer<typeof import("http").IncomingMessage, typeof import("http").ServerResponse>>;
export declare function useServer(): HttpServer<typeof import("http").IncomingMessage, typeof import("http").ServerResponse> | HttpsServer<typeof import("http").IncomingMessage, typeof import("http").ServerResponse>;
