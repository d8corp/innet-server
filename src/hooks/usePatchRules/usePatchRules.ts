import { Validator } from '@cantinc/utils'
import { useContext, useProps } from '@innet/jsx'

import { useEndpoint } from '../useEndpoint'
import { paramContext } from '../useParam'

import { StringProps } from '../../plugins'
import { Formatter } from '../../types'
import { getOrAdd, isValues } from '../../utils'

export interface PathRuleControllers {
  formatter?: (formatters: Formatter<any>[]) => void
  validator?: (validators: Validator<any, any>[]) => void
}

export function usePatchRules (rules?: PathRuleControllers) {
  const param = useContext(paramContext)

  if (param?.props.in !== 'path') return

  const { endpoint } = useEndpoint()
  const key = endpoint.key.slice(1, -1)

  rules?.formatter?.(getOrAdd(endpoint, `rules.path.formatter.${key}`, [{}, {}, {}, []]))

  const props = useProps<StringProps>()

  if (props?.values) {
    getOrAdd(endpoint, `rules.path.validation.${key}`, [{}, {}, {}, []])
      .push(isValues(props.values))
  } else {
    rules?.validator?.(getOrAdd(endpoint, `rules.path.validation.${key}`, [{}, {}, {}, []]))
  }
}
