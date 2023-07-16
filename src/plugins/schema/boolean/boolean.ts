import { HandlerPlugin } from 'innet'
import { useContext, useProps } from '@innet/jsx'

import { paramContext, useBlockPatch, useRulesPlugin, useSchemaType } from '../../../hooks'
import { BaseSchemaProps } from '../../../types'
import { isBoolean } from '../../../utils'

export interface BooleanProps extends BaseSchemaProps <boolean>{

}

export const boolean: HandlerPlugin = () => {
  useBlockPatch()
  useSchemaType('boolean', useProps<BooleanProps>())
  const param = useContext(paramContext)

  useRulesPlugin({
    formatter: [param ? val => val === 'true' || (val === 'false' ? false : val) : Boolean],
    validator: param && [isBoolean],
  })
}
