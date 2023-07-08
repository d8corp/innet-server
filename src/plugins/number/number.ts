import { HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useEndpoint, useParam, useSchemaType } from '../../hooks'
import { SchemaTypeOptions } from '../../types'

export interface NumberProps extends SchemaTypeOptions <number>{

}

const isNumber = (value: string, key: string) => {
  if (isNaN(value as any)) {
    return {
      error: 'test',
      key,
    }
  }
}

export const number: HandlerPlugin = () => {
  useSchemaType('number', useProps<NumberProps>())

  if (useParam()) {
    const { endpoint } = useEndpoint()

    if (!endpoint.key.startsWith('{')) return

    const key = endpoint.key.slice(1, -1)

    if (!endpoint.pathValidation) {
      endpoint.pathValidation = {}
    }

    if (!endpoint.pathValidation[key]) {
      endpoint.pathValidation[key] = []
    }

    endpoint.pathValidation[key].push(isNumber)
  }
}
