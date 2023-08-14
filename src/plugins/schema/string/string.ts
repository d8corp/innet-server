import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useSchemaType, useValidator } from '../../../hooks'
import { useFormatter } from '../../../hooks/useFormatter'
import { type Validator, type ValuesSchemaProps } from '../../../types'
import { defaultFormatter, isEach, isPattern, maxLength, minLength } from '../../../utils'

export interface StringProps extends ValuesSchemaProps <string> {
  min?: number
  max?: number
  pattern?: string | RegExp
  patternId?: string
}

export const string: HandlerPlugin = () => {
  const {
    min,
    max,
    pattern,
    patternId,
    ...props
  } = useProps<StringProps>() || {}
  const schema = useSchemaType('string', props)
  const validator: Validator<any, any>[] = []

  if (min !== undefined) {
    // @ts-expect-error: FIXME
    schema.minimum = min
    validator.push(minLength(min))
  }

  if (max !== undefined) {
    // @ts-expect-error: FIXME
    schema.maximum = max
    validator.push(maxLength(max))
  }

  if (pattern !== undefined) {
    // @ts-expect-error: FIXME
    schema.pattern = String(pattern)
    validator.push(isPattern(pattern, patternId))
  }

  if (props.default) {
    useFormatter(defaultFormatter(props.default, String))
  } else {
    useFormatter(String)
  }

  useValidator(isEach(validator))
}
