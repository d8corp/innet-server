import { type HandlerPlugin } from 'innet'
import { useContext, useProps } from '@innet/jsx'

import { bodyContext, useBlock, useBodyContext, useRule, useSchemaType } from '../../../hooks'
import { useParentRule } from '../../../hooks/useParentRule'
import type { SchemaProps } from '../../../types'
import { bin, binaryAccept, maxBin, minBin, nullable, oneOf, pipe, type Rule } from '../../../utils'

export type BinaryProps = SchemaProps<string> & {
  /**
   * File type filter (MIME types).
   *
   * @example
   * ```tsx
   * <binary accept='image/*' />
   * ```
   */
  accept?: string

  /**
   * Maximum file size in bytes.
   *
   * @example
   * ```tsx
   * <binary max={5242880} />
   * ```
   */
  max?: number

  /**
   * Minimum file size in bytes.
   *
   * @example
   * ```tsx
   * <binary min={1024} />
   * ```
   */
  min?: number
}

export const binary: HandlerPlugin = () => {
  useBlock('path')
  useBodyContext().useFile()

  const props = useProps<BinaryProps>()
  const schema = useSchemaType('string', props)
  const isBody = Boolean(useContext(bodyContext))
  const hasRules = !isBody || !props.readOnly

  if (schema) {
    schema.format = 'binary'
  }

  if (!hasRules) return

  const rules: Rule[] = []

  rules.push(bin)

  if (props?.min) {
    rules.push(minBin(props.min))
  }

  if (props?.max) {
    rules.push(maxBin(props.max))
  }

  if (props?.accept) {
    rules.push(binaryAccept(props.accept))
  }

  const parentRule = useParentRule()
  const rule = props.nullable ? oneOf([nullable, pipe(...rules)]) : pipe(...rules)
  useRule(parentRule(rule))
}
