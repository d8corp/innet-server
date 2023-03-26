import { Context } from '@innet/jsx';
import { type Action, type ActionOptions } from '../../utils';
export declare const actionContext: Context<Action<ActionOptions>, undefined>;
export declare function useAction<T extends Partial<ActionOptions>, O extends ActionOptions = ActionOptions & T>(): Action<O>;
