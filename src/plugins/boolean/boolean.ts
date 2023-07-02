import { HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useSchemaType } from '../../hooks'
import { SchemaTypeOptions } from '../../types'

export interface BooleanProps extends SchemaTypeOptions <boolean>{

}

export const boolean: HandlerPlugin = () => {
  useSchemaType('boolean', useProps<BooleanProps>())
}
