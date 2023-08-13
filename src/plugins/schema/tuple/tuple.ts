import innet, { type HandlerPlugin, useNewHandler } from 'innet'
import { useChildren, useProps } from '@innet/jsx'

import {
  type SchemaContext,
  schemaContext,
  useBlockPatch,
  useSchemaType,
  useValidator,
  validatorContext,
} from '../../../hooks'
import { formatterContext, useFormatter } from '../../../hooks/useFormatter'
import {
  type ArraySchemaObject,
  type BaseSchemaProps,
  type Formatter,
  type SchemaObject,
  type Validator,
} from '../../../types'
import { isTuple } from '../../../utils'
import { tupleFormatter } from '../../../utils/formatters/tupleFormatter'

export interface TupleProps extends BaseSchemaProps <any[]> {

}

export const tuple: HandlerPlugin = () => {
  useBlockPatch()

  const handler = useNewHandler()
  const schema = useSchemaType('array', useProps<TupleProps>()) as ArraySchemaObject
  const children = useChildren()

  const schemas: SchemaObject[] = []
  handler[schemaContext.key] = schemas satisfies SchemaContext

  // @ts-expect-error: FIXME
  schema.prefixItems = schemas

  const tupleFormatterMap: Formatter<any, any>[] = []
  const tupleValidatorMap: Validator<any, any>[] = []

  useFormatter(tupleFormatter(tupleFormatterMap))
  useValidator(isTuple(tupleValidatorMap))

  formatterContext.set(handler, formatter => {
    tupleFormatterMap.push(formatter)
  })

  validatorContext.set(handler, validator => {
    tupleValidatorMap.push(validator)
  })

  innet(children, handler)
}
