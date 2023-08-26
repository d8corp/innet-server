import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useBlock, useBodyFile, useRule, useSchemaType } from '../../../hooks'
import { useParentRule } from '../../../hooks/useParentRule'
import { bin, maxBin, minBin, pipe, type Rule } from '../../../utils'

export interface BinaryProps {
  ref?: string
  description?: string
  accept?: string
  min?: number
  max?: number
}

export const binary: HandlerPlugin = () => {
  useBlock('path')
  useBodyFile()

  const props = useProps<BinaryProps>()
  const schema = useSchemaType('string', props)

  if (schema) {
    schema.format = 'binary'
  }

  const rules: Rule[] = []

  rules.push(bin)

  if (props?.min) {
    rules.push(minBin(props.min))
  }

  if (props?.max) {
    rules.push(maxBin(props.max))
  }

  const parentRule = useParentRule()
  useRule(parentRule(pipe(...rules)))
}
