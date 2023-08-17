export function defaultTo (defaultValue: any) {
  return (value: any) => value === undefined ? defaultValue : value
}
