import { Handler } from 'innet';
import { Action, ActionOptions } from '../Action';
export declare function getAction<O extends ActionOptions>(handler: Handler): Action<O>;
