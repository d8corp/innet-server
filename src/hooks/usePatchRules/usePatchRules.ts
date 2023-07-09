import { optional, required, ValidationMap, Validator } from '@cantinc/utils'
import { useContext, useProps } from '@innet/jsx'

import { paramContext } from '../useParam'

import { StringProps } from '../../plugins'
import { Formatter, FormatterMap } from '../../types'
import { isValues } from '../../utils'

export interface PathRuleControllers {
  formatter?: Formatter<any>[]
  validator?: Validator<any, any>[]
}

export function usePatchRules (rules?: PathRuleControllers) {
  const param = useContext(paramContext)

  if (!param) return

  const { props: { name: key, required: req }, rules: paramRules } = param
  const requiredRule = req ? required : optional

  const formatter: FormatterMap<any> = {}
  const validator: ValidationMap<any> = {}

  if (rules?.formatter) {
    formatter[key] = rules.formatter
  }

  const props = useProps<StringProps>()

  if (props?.values) {
    validator[key] = requiredRule([isValues(props.values)])
  } else if (rules?.validator) {
    validator[key] = requiredRule(rules.validator)
  }

  paramRules.push([formatter, validator])
}
