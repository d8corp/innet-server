/// <reference types="node" />
import { CookieSerializeOptions } from 'cookie';
import { IncomingMessage, ServerResponse } from 'http';
export declare const ACTION: string;
export declare type Resources = 'search' | 'body' | 'cookies' | 'files';
export declare type Body = Record<string, any>;
export declare type Search = Record<string, any>;
export declare type Cookies = Record<string, string | string[]>;
export declare type Files = Record<string, File | File[]>;
export declare type Request = IncomingMessage;
export declare type Response = ServerResponse;
export interface ActionOptions {
    body?: Body;
    search?: Search;
    cookies?: Cookies;
    files?: Files;
}
export interface File {
    fieldName: string;
    headers: Record<string, string>;
    originalFilename: string;
    path: string;
    size: number;
}
export declare const URL_PARSER: RegExp;
export declare class Action<O extends ActionOptions = ActionOptions> {
    readonly req: Request;
    readonly res: Response;
    constructor(req: Request, res: Response);
    get cookies(): O['cookies'];
    setCookie(key: string, value?: string, opt?: CookieSerializeOptions): void;
    parseBody(): Promise<unknown>;
    body?: O['body'];
    files?: O['files'];
    get search(): O['search'];
    get parsedUrl(): {
        search?: string;
        path?: string;
    };
    get path(): string;
}
