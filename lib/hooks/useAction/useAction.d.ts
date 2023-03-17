import { Action, ActionOptions } from '../../action';
export declare function useAction<T extends Partial<ActionOptions>, O extends ActionOptions = ActionOptions & T>(): Action<O>;
