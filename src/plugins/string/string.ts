import { HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useEndpoint, useParam, useSchemaType } from '../../hooks'
import { SchemaValuesTypeOptions } from '../../types'
import { getOrAdd, isValues } from '../../utils'

export interface StringProps extends SchemaValuesTypeOptions <string>{}

export const string: HandlerPlugin = () => {
  const props = useProps<StringProps>()
  useSchemaType('string', props)

  if (useParam()) {
    if (props?.values) {
      const { endpoint } = useEndpoint()
      const key = endpoint.key.slice(1, -1)
      getOrAdd(endpoint, `rules.path.validation.${key}`, [{}, {}, {}, []]).push(isValues(props.values))
    }
  }
}
