export function defaultTo (defaultValue: any) {
  return (value: any) => value !== undefined
    ? value
    : typeof defaultValue === 'function'
      ? defaultValue()
      : defaultValue
}
