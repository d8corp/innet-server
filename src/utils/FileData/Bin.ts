export interface BinOptions {
  disposition: string
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
   * The file size
   */
  size: number
  /**
   * MIME-type of the file
   */
  type: string
}

export class Bin implements BinOptions {
  // @ts-expect-error: FIXME
  disposition: string
  /**
   * The extension of the origin file from originalFilename
   */
  extension?: string
  // @ts-expect-error: FIXME
  fieldName: string
  /**
   * A file name, without extension
   */
  filename: string
  // @ts-expect-error: FIXME
  originalFilename: string
  // @ts-expect-error: FIXME
  path: string
  // @ts-expect-error: FIXME
  size: number

  // @ts-expect-error: FIXME
  type: string

  constructor (options: BinOptions) {
    Object.assign(this, options)
    const splitFilename = options.originalFilename.split('.')
    this.extension = splitFilename.pop()
    this.filename = splitFilename.join('.')
  }

  toJSON () {
    return {
      $: 'binary',
      disposition: this.disposition,
      originalFilename: this.originalFilename,
      size: this.size,
      type: this.type,
    }
  }
}
