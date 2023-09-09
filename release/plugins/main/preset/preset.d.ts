import { Context } from '@innet/jsx';
import { Action } from '../../../utils';
export interface PresetProps {
}
export type PresetCondition = (action: Action) => boolean;
export declare const presetCondition: Context<PresetCondition, PresetCondition>;
export declare function preset(): void;
