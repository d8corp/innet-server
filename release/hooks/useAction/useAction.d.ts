import { Context } from '@innet/jsx';
import { type Action } from '../../utils';
export declare const actionContext: Context<Action, Action | undefined>;
export declare function useAction(): Action;
