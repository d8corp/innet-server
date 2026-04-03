import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useBlock, useRule, useSchemaType } from '../../../hooks'
import { type SchemaProps } from '../../../types'
import { nullable } from '../../../utils'

export interface NullProps extends SchemaProps <null> {

}

export const nullPlugin: HandlerPlugin = () => {
  useBlock('path', 'query', 'cookie', 'header')
  useSchemaType('null', useProps<NullProps>())

  useRule(nullable)
}
