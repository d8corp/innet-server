export type DateFormat = 'now' | Date | number | string

export function dateFormat (date?: DateFormat): Date | undefined {
  if (date === undefined) return
  if (date === 'now') return new Date()
  if (['number', 'string'].includes(typeof date)) return new Date(date)
  return date as Date
}
