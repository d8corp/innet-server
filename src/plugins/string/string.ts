import { HandlerPlugin } from 'innet'
import { useContext, useProps } from '@innet/jsx'

import { paramContext, useEndpoint, useSchemaType } from '../../hooks'
import { SchemaValuesTypeOptions } from '../../types'
import { getOrAdd, isValues } from '../../utils'

export interface StringProps extends SchemaValuesTypeOptions <string>{}

export const string: HandlerPlugin = () => {
  const props = useProps<StringProps>()
  const param = useContext(paramContext)

  useSchemaType('string', props)

  if (param?.props.in === 'path') {
    if (props?.values) {
      const { endpoint } = useEndpoint()
      const key = endpoint.key.slice(1, -1)
      getOrAdd(endpoint, `rules.path.validation.${key}`, [{}, {}, {}, []]).push(isValues(props.values))
    }
  }
}
