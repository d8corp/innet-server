import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useBlockPatch, useSchemaType, useValidator } from '../../../hooks'
import { type BaseSchemaProps } from '../../../types'
import { isNull } from '../../../utils'

export interface NullProps extends BaseSchemaProps <null> {

}

export const nullPlugin: HandlerPlugin = () => {
  useBlockPatch()
  useSchemaType('null', useProps<NullProps>())

  useValidator(isNull)
}
