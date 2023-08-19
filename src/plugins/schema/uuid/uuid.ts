import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'
import { v4 } from 'uuid'

import { useRule, useSchemaType } from '../../../hooks'
import { type ValuesSchemaProps } from '../../../types'
import { defaultTo, pipe, type Rule, uuidTo } from '../../../utils'

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

  const rules: Rule[] = []

  if (defaultValue !== undefined) {
    rules.push()
  }

  useRule(pipe(defaultTo(defaultValue === 'new' ? v4 : defaultValue), uuidTo))
}
