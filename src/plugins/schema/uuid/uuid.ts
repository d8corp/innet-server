import { HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'
import { v4 } from 'uuid'

import { useRulesPlugin, useSchemaType } from '../../../hooks'
import { SchemaValuesTypeOptions } from '../../../types'
import { isUuid } from '../../../utils/validators/isUuid'

export interface UuidProps extends SchemaValuesTypeOptions <string>{
  default?: 'new' | string
}

export const uuid: HandlerPlugin = () => {
  const { default: defaultValue, ...props } = useProps<UuidProps>() || {}
  const schema = useSchemaType('string', {
    ...props,
    default: defaultValue === 'new' ? undefined : defaultValue,
  })

  schema.format = 'uuid'

  if (defaultValue === 'new') {
    schema['x-default'] = defaultValue
  }

  useRulesPlugin({
    defaultValue: defaultValue === 'new' ? v4 : defaultValue,
    formatter: [String],
    validator: [isUuid],
  })
}
