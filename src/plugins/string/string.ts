import { HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { usePatchRules, useSchemaType } from '../../hooks'
import { SchemaValuesTypeOptions } from '../../types'

export interface StringProps extends SchemaValuesTypeOptions <string>{}

export const string: HandlerPlugin = () => {
  useSchemaType('string', useProps<StringProps>())
  usePatchRules()
}
