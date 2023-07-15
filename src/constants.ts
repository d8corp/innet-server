export const apiErrors = [
  'requestValidation',
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
] as const

export type ApiErrorValue = typeof apiErrors[number];
export type ApiValidationErrorValue = typeof apiValidationErrors[number];
