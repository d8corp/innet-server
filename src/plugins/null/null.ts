import { HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useBlockPatch, useSchemaType } from '../../hooks'
import { SchemaTypeOptions } from '../../types'

export interface NullProps extends SchemaTypeOptions <null>{

}

export const nullPlugin: HandlerPlugin = () => {
  useBlockPatch()
  useSchemaType('null', useProps<NullProps>())
}
