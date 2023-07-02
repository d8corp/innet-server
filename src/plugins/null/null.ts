import { HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useSchemaType } from '../../hooks'
import { SchemaTypeOptions } from '../../types'

export interface NullProps extends SchemaTypeOptions <null>{

}

export const nullPlugin: HandlerPlugin = () => {
  useSchemaType('null', useProps<NullProps>())
}
