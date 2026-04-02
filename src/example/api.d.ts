declare namespace Api {
  export interface Bin {
    filename: string
    fieldName: string
    originalFilename: string
    path: string
    type: string
    disposition: string
    size: number
    extension?: string
  }
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
  }
  export interface Endpoints {
    ['GET:/todos']: {
      search: {
        done?: boolean
        page: number
        pageSize: number
      }
      response: {
        ['default']: {
          page: number
          pageSize: number
          count: number
          todos: Array<Schemas.TodoSchema>
        }
     }
    }
    ['POST:/todos']: {
      body: Schemas.TodoSchemaBody
      response: {
        ['default']: Schemas.TodoSchema
     }
    }
    ['GET:/todos/{todoId}']: {
      params: {
        todoId: string
      }
      response: {
        ['default']: Schemas.TodoSchema
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
    }
    ['DELETE:/todos/{todoId}']: {
      params: {
        todoId: string
      }
      response: {
        ['204']: void
     }
    }
  }
}

declare module '@innet/server' {
  type ApiEndpoints = Api.Endpoints
  type ApiSchemas = Api.Schemas
}
