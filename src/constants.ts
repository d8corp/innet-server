import { type BodyType } from './types'

export const apiErrors = [
  'requestValidation',
  'requestBodyContentType',
] as const

export type ApiErrorValue = typeof apiErrors[number]

export const allBodyTypes: BodyType[] = [
  'application/json',
  'application/x-www-form-urlencoded',
  'multipart/form-data',
]
