import innet, { type HandlerPlugin, useNewHandler } from 'innet'
import { useChildren, useProps } from '@innet/jsx'

import {
  formatterContext,
  objectFormatterContext,
  objectValidatorContext,
  schemaContext, useApi,
  useBlockPatch,
  useFormatter,
  useSchemaType,
  useValidator,
  validatorContext,
} from '../../../hooks'
import { type BaseSchemaProps } from '../../../types'
import { isObject, objectFormatter, type ObjectFormatterMap, type ObjectValidatorMap } from '../../../utils'

export interface ObjectProps extends BaseSchemaProps <object> {

}

export const object: HandlerPlugin = () => {
  useBlockPatch()

  const children = useChildren()
  const props = useProps<ObjectProps>() || {}
  const { refFormatters, refValidators } = useApi()

  const schema = useSchemaType('object', props)
  const handler = useNewHandler()

  if (schema) {
    schemaContext.set(handler, schema)

    const formatterMap: ObjectFormatterMap = {}
    const validatorMap: ObjectValidatorMap = {}
    const formatter = objectFormatter(formatterMap)
    const validator = isObject(validatorMap)

    if (props.ref) {
      refFormatters[props.ref] = formatter
      refValidators[props.ref] = validator
    }

    useFormatter(formatter)
    useValidator(validator)

    objectFormatterContext.set(handler, formatterMap)
    objectValidatorContext.set(handler, validatorMap)

    formatterContext.set(handler, null)
    validatorContext.set(handler, null)

    innet(children, handler)
  } else if (props.ref) {
    useFormatter(refFormatters[props.ref])
    useValidator(refValidators[props.ref])
  }
}
