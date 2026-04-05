import '@innet/server'

declare global {
  namespace Api {
    export interface Schemas {
    TodoSchemaBody: {
      id: string
      title: string
      done: boolean | null
    }
    TodoSchema: {
      id: string
      title: string
      created: Date
      done: boolean | null
    }
    ApiValidationError: {
      data?: {
          error: string
          in: string
          key?: string
        } | {
          error: string
          in: string
          key?: string
          value: any
        } | {
          accept: string
          error: string
          in: string
          key?: string
          value: any
        } | {
          error: string
          in: string
          key?: string
        } | {
          error: string
          in: string
          key?: string
          value: any
        } | {
          error: string
          format: string
          in: string
          key?: string
          max?: number | string
          min?: number | string
          value: any
        } | {
          error: string
          in: string
          key?: string
          max: number
          value: any
        } | {
          error: string
          in: string
          key?: string
          max: Date
          value: Date
        } | {
          error: string
          in: string
          key?: string
          max: number | string
          value: any
        } | {
          error: string
          in: string
          key?: string
          max: number
          value: string
        } | {
          error: string
          in: string
          key?: string
          min: number
          value: any
        } | {
          error: string
          in: string
          key?: string
          min: Date
          value: Date
        } | {
          error: string
          in: string
          key?: string
          min: number | string
          value: any
        } | {
          error: string
          in: string
          key?: string
          min: number
          value: string
        } | {
          error: string
          in: string
          key?: string
        } | {
          error: string
          in: string
          key?: string
          value: any
        } | {
          error: string
          in: string
          key?: string
          value: any
        } | {
          error: string
          errors: Array<{
            }>
          in: string
          key?: string
        } | {
          error: string
          in: string
          key?: string
          pattern: string
          patternId: string
          value: any
        } | {
          error: string
          in: string
          key?: string
        } | {
          error: string
          in: string
          key?: string
        } | {
          error: string
          in: string
          key?: string
        } | {
          error: string
          in: string
          key?: string
        } | {
          error: string
          in: string
          key?: string
          value: any
          values: Array<any>
        }
      error?: string
    }
    ApiRequestBodyContentTypeError: {
      error?: string
    }
  }
  export interface Endpoints {
    ['GET:/todos']: {
      search: {
        done?: boolean
        page: number
        pageSize: number
      }
      response: {
        ['400']: Schemas['ApiValidationError']
        ['default']: {
          page: number
          pageSize: number
          count: number
          todos: Array<Schemas['TodoSchema']>
        }
     }
    }
    ['POST:/todos']: {
      body: Schemas['TodoSchemaBody']
      response: {
        ['400']: Schemas['ApiRequestBodyContentTypeError'] | Schemas['ApiValidationError']
        ['default']: Schemas['TodoSchema']
     }
    }
    ['GET:/todos/{todoId}']: {
      params: {
        todoId: string
      }
      response: {
        ['400']: Schemas['ApiValidationError']
        ['default']: Schemas['TodoSchema']
     }
    }
    ['PATCH:/todos/{todoId}']: {
      params: {
        todoId: string
      }
      body: {
        done?: boolean
        title?: string
      }
      response: {
        ['400']: Schemas['ApiRequestBodyContentTypeError'] | Schemas['ApiValidationError']
     }
    }
    ['DELETE:/todos/{todoId}']: {
      params: {
        todoId: string
      }
      response: {
        ['204']: void
        ['400']: Schemas['ApiValidationError']
     }
    }
  }
  }
}

declare module '@innet/server' {
  interface ApiEndpoints extends Api.Endpoints {}
  interface ApiSchemas extends Api.Schemas {}
}
