/// <reference types="node" />
import { CookieSerializeOptions } from 'cookie';
import { IncomingMessage, ServerResponse } from 'http';
import { FormOptions } from 'multiparty';
import { ParsedQs } from 'qs';
export declare const ACTION: string;
export declare type Body = Record<string, any>;
export declare type Search = ParsedQs;
export declare type Cookies = Record<string, string | string[]>;
export interface File {
    fieldName: string;
    headers: Record<string, string>;
    originalFilename: string;
    path: string;
    size: number;
}
export declare type Files = Record<string, File | File[]>;
export declare type Request = IncomingMessage;
export declare type Response = ServerResponse;
export interface ActionOptions {
    search: Search;
    cookies: Cookies;
    body?: Body;
    files?: Files;
}
export interface ActionParams {
    multipartyForm?: FormOptions;
}
export declare type Resources = Exclude<keyof ActionOptions, undefined>;
export declare const URL_PARSER: RegExp;
export declare const KEY_FIELD: RegExp;
export declare const KEY_KEYS: RegExp;
export declare class Action<O extends ActionOptions = ActionOptions> {
    readonly req: Request;
    readonly res: Response;
    params: ActionParams;
    constructor(req: Request, res: Response, params?: ActionParams);
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
