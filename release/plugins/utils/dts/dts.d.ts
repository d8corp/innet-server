import { type HandlerPlugin } from 'innet';
import { type Config } from 'dtsgenerator/dist/core/config';
export interface DtsProps extends Partial<Config> {
    path: string;
}
export declare const dts: HandlerPlugin;
