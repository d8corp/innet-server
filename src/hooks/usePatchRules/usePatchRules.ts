import { ValidationMap, Validator } from '@cantinc/utils'
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

  if (param?.props.in !== 'path') return

  const { props: { name: key }, rules: paramRules } = param

  const formatter: FormatterMap<any> = {}
  const validator: ValidationMap<any> = {}

  if (rules?.formatter) {
    formatter[key] = rules.formatter
  }

  const props = useProps<StringProps>()

  if (props?.values) {
    validator[key] = [isValues(props.values)]
  } else if (rules?.validator) {
    validator[key] = rules.validator
  }

  paramRules.push([formatter, validator])
}
