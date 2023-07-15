import { HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'
import { v5 } from 'uuid'

import { usePatchRules, useSchemaType } from '../../../hooks'
import { SchemaValuesTypeOptions } from '../../../types'
import { isUuid } from '../../../utils/validators/isUuid'

export interface DateProps extends SchemaValuesTypeOptions <string>{

}

export const uuid: HandlerPlugin = () => {
  const props = useProps<DateProps>() || {}
  const schema = useSchemaType('string', props)

  schema.format = 'uuid'

  usePatchRules({
    formatter: [String],
    validator: [isUuid],
  })
}
