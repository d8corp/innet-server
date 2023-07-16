import http from 'http'
import { StringDecoder } from 'string_decoder'

export function parseBody (req: http.IncomingMessage) {
  return new Promise<string>((resolve, reject) => {
    const decoder = new StringDecoder('utf-8')
    let buffer = ''

    req.on('data', chunk => {
      buffer += decoder.write(chunk)
    })

    req.on('end', () => {
      buffer += decoder.end()
      resolve(buffer)
    })

    req.on('error', err => {
      reject(err)
    })
  })
}
