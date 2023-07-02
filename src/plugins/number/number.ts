import { HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useSchemaType } from '../../hooks'
import { SchemaTypeOptions } from '../../types'

export interface NumberProps extends SchemaTypeOptions <number>{

}

export const number: HandlerPlugin = () => {
  useSchemaType('number', useProps<NumberProps>())
}
