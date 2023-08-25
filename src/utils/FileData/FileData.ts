export interface FileDataOptions {
  fieldName: string
  originalFilename: string
  path: string
  headers: {
    'content-disposition': string
    'content-type': string
  }
  size: number
}

export class FileData implements FileDataOptions {
  // @ts-expect-error: FIXME
  fieldName: string
  // @ts-expect-error: FIXME
  originalFilename: string
  // @ts-expect-error: FIXME
  path: string
  // @ts-expect-error: FIXME
  headers: {
    'content-disposition': string
    'content-type': string
  }

  // @ts-expect-error: FIXME
  size: number

  constructor (file: FileDataOptions) {
    Object.assign(this, file)
  }
}
