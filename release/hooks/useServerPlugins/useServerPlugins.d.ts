import { type Handler } from 'innet';
import { Context } from '@innet/jsx';
import { type ServerPlugin } from '../useServer';
export declare const serverPlugins: Context<Map<ServerPlugin, Handler>, Map<ServerPlugin, Handler> | undefined>;
export declare function useServerPlugins(): Map<ServerPlugin, Handler>;
