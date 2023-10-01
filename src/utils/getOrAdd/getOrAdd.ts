export function getOrAdd <R = any> (target: object, path: number | string, defaultValues: any[]): R {
  const pathKeys = String(path).split('.').map(value => isNaN(Number(value)) ? value : Number(value))

  let currentTarget: any = target

  for (let i = 0; i < pathKeys.length; i++) {
    const key = pathKeys[i]

    if (currentTarget[key] === undefined) {
      currentTarget[key] = defaultValues[i]
    }

    currentTarget = currentTarget[key]
  }

  return currentTarget
}
