import { type rulesErrors } from './constants'

export type Rule = (value: any, data?: object) => any
export type RulesErrors = typeof rulesErrors[number]
