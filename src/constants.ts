import { type BodyType } from './types'

export const apiErrors = [
  'requestValidation',
  'requestBodyContentType',
] as const

export const apiValidationErrors = [
  'number',
  'date',
  'uuid',
  'integer',
  'minimum',
  'boolean',
  'minDate',
  'maxDate',
  'maximum',
  'values',
  'object',
] as const

export type ApiErrorValue = typeof apiErrors[number]
export type ApiValidationErrorValue = typeof apiValidationErrors[number]

export const allBodyTypes: BodyType[] = [
  'application/json',
  'application/x-www-form-urlencoded',
  'multipart/form-data',
]
