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
  namespace Schemas {
    export type TodoSchema = {
      id: string
      title: string
      created: Date
      done: boolean
    }
    export type TodoSchemaBody = {
      id: string
      title: string
      done: boolean
    }
  }
  export interface Endpoints {
    ['GET:/todos']: {
      Search: {
        done?: boolean
        page: number
        pageSize: number
      }
      Response: {
        ['default']: {
          page: number
          pageSize: number
          count: number
          todos: Array<Schemas.TodoSchema>
        }
     }
    }
    ['POST:/todos']: {
      Body: Schemas.TodoSchemaBody
      Response: {
        ['default']: Schemas.TodoSchema
     }
    }
    ['GET:/todos/{todoId}']: {
      Params: {
        todoId: string
      }
      Response: {
        ['default']: Schemas.TodoSchema
     }
    }
    ['PATCH:/todos/{todoId}']: {
      Params: {
        todoId: string
      }
      Body: {
        done?: boolean
        title?: string
      }
    }
    ['DELETE:/todos/{todoId}']: {
      Params: {
        todoId: string
      }
    }
  }
}