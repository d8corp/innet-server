export function JSONString (target: any): string {
  return JSON.stringify(target, (key, value) => {
    if (typeof value === 'bigint') {
      return String(value)
    }

    return value
  })
}
