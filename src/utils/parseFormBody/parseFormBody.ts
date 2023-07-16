import http from 'http'
import { Form } from 'multiparty'

import { parseSearch } from '../parseSearch'

export function parseFormBody (req: http.IncomingMessage) {
  return new Promise<object>((resolve, reject) => {
    const form = new Form()
    form.parse(req, (error, fields, files) => {
      if (error) {
        reject(error)
        return
      }

      let query = ''
      const queryFiles = []

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
          queryFiles.push(value)
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
