import { HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useEndpoint, useParam, useSchemaType } from '../../hooks'
import { SchemaTypeOptions } from '../../types'
import { getOrAdd, isNumber } from '../../utils'

export interface NumberProps extends SchemaTypeOptions <number>{

}

export const number: HandlerPlugin = () => {
  const props = useProps<NumberProps>()
  useSchemaType('number', props)

  if (useParam()) {
    const { endpoint } = useEndpoint()

    if (!endpoint.key.startsWith('{')) return

    const key = endpoint.key.slice(1, -1)

    const validators = getOrAdd(endpoint, `rules.path.validation.${key}`, [{}, {}, {}, []])
    validators.push(isNumber)
  }
}
