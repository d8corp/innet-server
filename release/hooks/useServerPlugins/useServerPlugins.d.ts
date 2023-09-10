import { Context } from '@innet/jsx';
import { type ServerPlugin } from '../useServer';
export declare const serverPlugins: Context<Set<ServerPlugin>, Set<ServerPlugin> | undefined>;
export declare function useServerPlugins(): Set<ServerPlugin>;
