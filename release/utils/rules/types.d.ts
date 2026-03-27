import { type rulesErrors } from './constants';
export type Rule = (value: any, data?: object) => any;
export type SetRule = (rule: Rule) => Rule;
export type RulesErrors = typeof rulesErrors[number];
