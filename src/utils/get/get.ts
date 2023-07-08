export function get <R = any> (target: object, path: string, defaultValues: any[]): R {
  const pathKeys = path.split('.')

  let currentTarget: any = target

  for (let i = 0; i < pathKeys.length; i++) {
    const key = pathKeys[i]

    if (!(key in currentTarget)) {
      currentTarget[key] = defaultValues[i]
    }

    currentTarget = currentTarget[key]
  }

  return currentTarget
}
