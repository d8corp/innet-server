import { HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useSchemaType } from '../../hooks'
import { SchemaTypeOptions } from '../../types'

export interface StringProps extends SchemaTypeOptions <string>{

}

export const string: HandlerPlugin = () => {
  useSchemaType('string', useProps<StringProps>())
}
