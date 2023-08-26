import type http from 'http'
import { Form } from 'multiparty'

import { Bin } from '../FileData'
import { parseSearch } from '../parseSearch'

export async function parseFormBody (req: http.IncomingMessage) {
  return await new Promise<object>((resolve, reject) => {
    const form = new Form()
    form.parse(req, (error, fields, files) => {
      if (error) {
        reject(error)
        return
      }

      let query = ''
      const queryFiles: any[] = []

      for (const key in fields) {
        for (const value of fields[key]) {
          if (query) {
            query += '&'
          }
          query += `${key}=${(value as string).replaceAll('=', '%26')}`
        }
      }

      for (const key in files) {
        const values = files[key]
        for (const value of values) {
          if (query) {
            query += '&'
          }
          query += `${key}==${queryFiles.length}`
          const { headers, ...options } = value
          options.type = headers['content-type']
          options.disposition = headers['content-disposition']
          queryFiles.push(new Bin(options))
        }
      }

      resolve(parseSearch(query, {
        decoder (value, decoder, charset, type) {
          if (type === 'key') {
            return decoder(value, decoder, charset)
          }

          if (value.startsWith('=')) {
            return queryFiles[Number(value.slice(1))]
          }

          return value.replaceAll('%26', '=')
        },
      }))
    })
  })
}
