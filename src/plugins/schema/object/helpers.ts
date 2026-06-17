import { field } from '../field'

export function formatObjectChildren (children: any): any {
  if (!Array.isArray(children)) {
    return children
  }

  const result = []

  for (let i = 0; i < children.length; i++) {
    const child = children[i]

    if (typeof child !== 'string') {
      result.push(child)
      continue
    }

    const keyRaw = child.trim()

    if (!keyRaw.endsWith(':')) {
      result.push(child)
      continue
    }

    const optional = keyRaw.endsWith('?:')
    const key = keyRaw.slice(0, optional ? -2 : -1)

    result.push({
      props: {
        children: children[i + 1],
        key,
        optional,
      },
      type: field,
    })

    i++
  }

  return result
}
