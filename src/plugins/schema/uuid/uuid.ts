import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'
import { v4 } from 'uuid'

import { useFormatter, useSchemaType, useValidator } from '../../../hooks'
import { type ValuesSchemaProps } from '../../../types'
import { defaultFormatter } from '../../../utils'
import { isUuid } from '../../../utils/validators/isUuid'

export interface UuidProps extends ValuesSchemaProps <string> {
  default?: 'new' | string
}

export const uuid: HandlerPlugin = () => {
  const { default: defaultValue, ...props } = useProps<UuidProps>() || {}
  const schema = useSchemaType('string', {
    ...props,
    default: defaultValue === 'new' ? undefined : defaultValue,
  })
  // @ts-expect-error: FIXME
  schema.format = 'uuid'

  if (defaultValue === 'new') {
    // @ts-expect-error: FIXME
    schema['x-default'] = defaultValue
  }

  useFormatter(defaultFormatter(defaultValue === 'new' ? v4 : defaultValue, String))
  useValidator(isUuid)
}
