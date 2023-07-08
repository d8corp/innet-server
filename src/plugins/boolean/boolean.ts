import { HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useBlockPatch, useSchemaType } from '../../hooks'
import { SchemaTypeOptions } from '../../types'

export interface BooleanProps extends SchemaTypeOptions <boolean>{

}

export const boolean: HandlerPlugin = () => {
  useBlockPatch()
  useSchemaType('boolean', useProps<BooleanProps>())
}
