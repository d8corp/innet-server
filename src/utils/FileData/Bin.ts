export interface BinOptions {
  /**
   * A field name of FormData request
   */
  fieldName: string
  /**
   * Full origin file name
   */
  originalFilename: string
  /**
   * Full path to the file on server, you MUST use it only on server side for the safe
   */
  path: string
  /**
   * MIME-type of the file
   */
  type: string
  disposition: string
  /**
   * The file size
   */
  size: number
}

export class Bin implements BinOptions {
  /**
   * A file name, without extension
   */
  filename: string
  /**
   * The extension of the origin file from originalFilename
   */
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
