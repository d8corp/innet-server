export type DateFormat = 'now' | Date | number | string

export function dateFormat (date?: DateFormat | null): Date | undefined {
  if (date === undefined || date === null) return
  if (date === 'now') return new Date()
  if (['number', 'string'].includes(typeof date)) return new Date(date)
  return date as Date
}
