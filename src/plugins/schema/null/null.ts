import { type HandlerPlugin } from 'innet'
import { useContext, useProps } from '@innet/jsx'

import { bodyContext, useBlock, useRule, useSchemaType } from '../../../hooks'
import { type SchemaProps } from '../../../types'
import { nullable } from '../../../utils'

export type NullProps = SchemaProps<null>

export const nullPlugin: HandlerPlugin = () => {
  useBlock('path', 'cookie', 'header')
  const props = useProps<NullProps>()
  useSchemaType('null', props)
  const isBody = Boolean(useContext(bodyContext))
  const hasRules = !isBody || !props.readOnly

  if (!hasRules) return

  useRule(nullable)
}
