import { type HandlerPlugin } from 'innet'
import { useContext, useProps } from '@innet/jsx'

import { paramContext, useBlockPatch, useFormatter, useSchemaType, useValidator } from '../../../hooks'
import { type BaseSchemaProps } from '../../../types'
import { isBoolean } from '../../../utils'

export interface BooleanProps extends BaseSchemaProps <boolean> {

}

export const boolean: HandlerPlugin = () => {
  useBlockPatch()
  useSchemaType('boolean', useProps<BooleanProps>())
  const param = useContext(paramContext)

  useFormatter(param ? val => val === 'true' || (val === 'false' ? false : Boolean(val)) : Boolean)
  useValidator(isBoolean)
}
