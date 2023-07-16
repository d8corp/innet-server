import { optional, required, ValidationMap, Validator } from '@cantinc/utils'
import { useContext } from '@innet/jsx'

import { paramContext } from '../useParam'
import { rulesContext } from '../useRules'

import { ApiValidationErrorData, Formatter, FormatterMap } from '../../types'
import { isValues, ValuesData } from '../../utils'

export interface RuleControllers<V, D, DV, K extends string = string> {
  formatter?: Formatter<V>[]
  validator?: Validator<any, K>[]
  defaultValue?: V | (() => V)
  values?: V[]
  isValues?: (values: V[]) => (value: V, key: K) => ApiValidationErrorData<K, ValuesData<DV>> | undefined
}

export function useRulesPlugin<V, D, DV, K extends string = string> (rules?: RuleControllers<V, D, DV, K>) {
  const contextRules = useContext(rulesContext)

  if (!contextRules) return

  const { key, required: req, rules: paramRules } = contextRules
  const requiredRule = req ? required : optional

  const formatter: FormatterMap<any> = {}
  const validator: ValidationMap<any> = {}
  const defaultValues: Record<string, any> = {}

  if (rules?.formatter) {
    formatter[key] = rules.formatter
  }

  if (rules && 'defaultValue' in rules) {
    defaultValues[key] = rules.defaultValue
  }

  if (rules?.values) {
    const currentIsValues = rules.isValues || isValues
    validator[key] = requiredRule([currentIsValues(rules.values)])
  } else if (rules?.validator) {
    validator[key] = requiredRule(rules.validator)
  }

  paramRules.push([formatter, validator, defaultValues])
}