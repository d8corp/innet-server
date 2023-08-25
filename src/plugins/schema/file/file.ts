import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useBlock, useBodyFile, useRule, useSchemaType } from '../../../hooks'
import { useParentRule } from '../../../hooks/useParentRule'
import { fileData, pipe, type Rule } from '../../../utils'

export interface FileProps {
  description?: string
  ref?: string
}

export const file: HandlerPlugin = () => {
  useBlock('path')
  useBodyFile()

  const props = useProps<FileProps>()
  const schema = useSchemaType('string', props)

  if (schema) {
    schema.format = 'binary'
  }

  const rules: Rule[] = []

  rules.push(fileData)

  const parentRule = useParentRule()
  useRule(parentRule(pipe(...rules)))
}
