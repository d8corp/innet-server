import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useBlockPatch, useSchemaType } from '../../../hooks'
import { type BaseSchemaProps } from '../../../types'

export interface NullProps extends BaseSchemaProps <null> {

}

export const nullPlugin: HandlerPlugin = () => {
  useBlockPatch()
  useSchemaType('null', useProps<NullProps>())
}
