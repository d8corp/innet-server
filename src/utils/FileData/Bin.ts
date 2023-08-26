export interface BinOptions {
  fieldName: string
  originalFilename: string
  path: string
  type: string
  disposition: string
  size: number
}

export class Bin implements BinOptions {
  filename: string
  extension?: string
  // @ts-expect-error: FIXME
  type: string
  // @ts-expect-error: FIXME
  disposition: string
  // @ts-expect-error: FIXME
  fieldName: string
  // @ts-expect-error: FIXME
  originalFilename: string
  // @ts-expect-error: FIXME
  path: string

  // @ts-expect-error: FIXME
  size: number

  constructor (options: BinOptions) {
    Object.assign(this, options)
    const splitFilename = options.originalFilename.split('.')
    this.extension = splitFilename.pop()
    this.filename = splitFilename.join('.')
  }

  toJSON () {
    return {
      $: 'binary',
      originalFilename: this.originalFilename,
      type: this.type,
      disposition: this.disposition,
      size: this.size,
    }
  }
}
