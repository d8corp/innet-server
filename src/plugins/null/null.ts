import { HandlerPlugin } from 'innet'
import { useContext, useProps } from '@innet/jsx'

import { paramContext, useSchemaType } from '../../hooks'
import { SchemaTypeOptions } from '../../types'

export interface NullProps extends SchemaTypeOptions <null>{

}

export const nullPlugin: HandlerPlugin = () => {
  const param = useContext(paramContext)

  if (param?.props.in === 'path') {
    throw Error('<null> cannot be used in patch param <param in="path">')
  }

  useSchemaType('null', useProps<NullProps>())
}
