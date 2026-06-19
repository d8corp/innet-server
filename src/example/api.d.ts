import '@innet/server'

declare global {
  namespace Api {
    export interface Schemas {
      ListSchemaTodos: {
        'page': number
        'pageSize': number
        'count': number
        'todos': Array<Schemas['Todo']>
      }
      TodoAdd: {
        'id': string
        'created': Date
        'changed': Date | null
        'title': string
        'done': boolean
      }
      Todo: {
        'id': string
        'created': Date
        'changed': Date | null
        'title': string
        'done': boolean
      }
      TodoNotFound: {
        'error': string
      }
      TodoEdit: {
        'changed': Date
        'title'?: string
        'done'?: boolean
      }
      ApiValidationError: {
        'data'?: {
            'error': string
            'in': string
            'key'?: string
          } | {
            'error': string
            'in': string
            'key'?: string
            'value': any
          } | {
            'accept': string
            'error': string
            'in': string
            'key'?: string
            'value': any
          } | {
            'error': string
            'in': string
            'key'?: string
          } | {
            'error': string
            'in': string
            'key'?: string
            'value': any
          } | {
            'error': string
            'format': string
            'in': string
            'key'?: string
            'max'?: number | string
            'min'?: number | string
            'value': any
          } | {
            'error': string
            'in': string
            'key'?: string
            'max': number
            'value': any
          } | {
            'error': string
            'in': string
            'key'?: string
            'max': Date
            'value': Date
          } | {
            'error': string
            'in': string
            'key'?: string
            'max': number | string
            'value': any
          } | {
            'error': string
            'in': string
            'key': string
            'max': number
            'value': Array<any>
          } | {
            'error': string
            'in': string
            'key'?: string
            'max': number
            'value': string
          } | {
            'error': string
            'in': string
            'key'?: string
            'min': number
            'value': any
          } | {
            'error': string
            'in': string
            'key'?: string
            'min': Date
            'value': Date
          } | {
            'error': string
            'in': string
            'key'?: string
            'min': number | string
            'value': any
          } | {
            'error': string
            'in': string
            'key': string
            'min': number
            'value': Array<any>
          } | {
            'error': string
            'in': string
            'key'?: string
            'min': number
            'value': string
          } | {
            'error': string
            'in': string
            'key'?: string
          } | {
            'error': string
            'in': string
            'key'?: string
            'value': any
          } | {
            'error': string
            'in': string
            'key'?: string
            'value': any
          } | {
            'error': string
            'errors': Array<{
              }>
            'in': string
            'key'?: string
          } | {
            'error': string
            'in': string
            'key'?: string
            'pattern': string
            'patternId': string
            'value': any
          } | {
            'error': string
            'in': string
            'key'?: string
          } | {
            'error': string
            'in': string
            'key'?: string
          } | {
            'error': string
            'in': string
            'key'?: string
          } | {
            'error': string
            'in': string
            'key': string
            'value': Array<any>
          } | {
            'error': string
            'in': string
            'key'?: string
          } | {
            'error': string
            'in': string
            'key'?: string
            'value': any
            'values': Array<any>
          }
        'error'?: string
      }
      ApiRequestBodyContentTypeError: {
        'error'?: string
      }
    }
    export interface Endpoints {
      'GET:/todos': {
        search: {
          'done'?: boolean
          'page': number
          'pageSize': number
        }
        response: {
          '400': Schemas['ApiValidationError']
          'default': Schemas['ListSchemaTodos']
        }
      }
      'POST:/todos': {
        body: Schemas['TodoAdd']
        response: {
          '400': Schemas['ApiRequestBodyContentTypeError'] | Schemas['ApiValidationError']
          'default': Schemas['Todo']
        }
      }
      'GET:/todos/{todoId}': {
        params: {
          'todoId': string
        }
        response: {
          '400': Schemas['ApiValidationError']
          '404': Schemas['TodoNotFound']
          'default': Schemas['Todo']
        }
      }
      'PATCH:/todos/{todoId}': {
        params: {
          'todoId': string
        }
        body: Schemas['TodoEdit']
        response: {
          '204': void
          '400': Schemas['ApiRequestBodyContentTypeError'] | Schemas['ApiValidationError']
          '404': Schemas['TodoNotFound']
        }
      }
      'DELETE:/todos/{todoId}': {
        params: {
          'todoId': string
        }
        response: {
          '204': void
          '400': Schemas['ApiValidationError']
          '404': Schemas['TodoNotFound']
        }
      }
    }
  }
}

declare module '@innet/server' {
  interface ApiEndpoints extends Api.Endpoints {}
  interface ApiSchemas extends Api.Schemas {}
}
