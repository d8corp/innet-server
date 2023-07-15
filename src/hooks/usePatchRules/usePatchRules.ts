import { optional, required, ValidationMap, Validator } from '@cantinc/utils'
import { useContext, useProps } from '@innet/jsx'

import { paramContext } from '../useParam'

import { Formatter, FormatterMap, SchemaValuesTypeOptions } from '../../types'
import { isValues } from '../../utils'

export interface PathRuleControllers {
  formatter?: Formatter<any>[]
  validator?: Validator<any, any>[]
  defaultValue?: any
}

export function usePatchRules (rules?: PathRuleControllers) {
  const param = useContext(paramContext)

  if (!param) return

  const { props: { name: key, required: req }, rules: paramRules } = param
  const requiredRule = req ? required : optional

  const formatter: FormatterMap<any> = {}
  const validator: ValidationMap<any> = {}
  const defaultValues: Record<string, any> = {}

  if (rules?.formatter) {
    formatter[key] = rules.formatter
  }

  const props = useProps<SchemaValuesTypeOptions<any>>()

  if (props && 'default' in props) {
    defaultValues[key] = props.default
  }

  if (props?.values) {
    validator[key] = requiredRule([isValues(props.values)])
  } else if (rules?.validator) {
    validator[key] = requiredRule(rules.validator)
  }

  paramRules.push([formatter, validator, defaultValues])
}
