import { HandlerPlugin } from 'innet'
import { useContext, useProps } from '@innet/jsx'

import { paramContext, useEndpoint, useSchemaType } from '../../hooks'
import { SchemaValuesTypeOptions } from '../../types'
import { getOrAdd, isNumber, isValues } from '../../utils'

export interface NumberProps extends SchemaValuesTypeOptions <number>{

}

export const number: HandlerPlugin = () => {
  const props = useProps<NumberProps>()
  const param = useContext(paramContext)

  useSchemaType('number', props)

  if (param?.props.in === 'path') {
    const { endpoint } = useEndpoint()

    if (!endpoint.key.startsWith('{')) return

    const key = endpoint.key.slice(1, -1)
    const validation = getOrAdd(endpoint, `rules.path.validation.${key}`, [{}, {}, {}, []])
    const formatter = getOrAdd(endpoint, `rules.path.formatter.${key}`, [{}, {}, {}, []])

    formatter.push(Number)

    if (props?.values) {
      validation.push(isValues(props.values))
    } else {
      validation.push(isNumber)
    }
  }
}
