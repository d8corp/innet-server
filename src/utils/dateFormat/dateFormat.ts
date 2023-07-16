export type DateFormat = 'now' | string | number | Date

export function dateFormat (date?: DateFormat): Date | undefined {
  if (date === undefined) return
  if (date === 'now') return new Date()
  if (['string', 'number'].includes(typeof date)) return new Date(date)
  return date as Date
}
