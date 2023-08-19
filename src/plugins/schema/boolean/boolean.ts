import { type HandlerPlugin } from 'innet'
import { useContext, useProps } from '@innet/jsx'

import { paramContext, useBlockPatch, useRule, useSchemaType } from '../../../hooks'
import { type BaseSchemaProps } from '../../../types'

export interface BooleanProps extends BaseSchemaProps <boolean> {

}

export const boolean: HandlerPlugin = () => {
  useBlockPatch()
  useSchemaType('boolean', useProps<BooleanProps>())
  const param = useContext(paramContext)

  useRule(param ? val => val === 'true' || (val === 'false' ? false : Boolean(val)) : Boolean)
}
