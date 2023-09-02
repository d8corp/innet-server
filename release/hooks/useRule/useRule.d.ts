import { Context } from '@innet/jsx';
import { type Rule } from '../../utils/rules';
export type RuleContext = (rule: Rule) => void;
export declare const ruleContext: Context<RuleContext, null>;
export declare function useSetRule(): RuleContext;
export declare function useRule(rule: Rule): void;
