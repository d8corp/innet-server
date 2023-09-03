declare namespace Api {
  namespace Schemas {
    export type TodoSchema = {
      id: string
      title: string
      done: boolean
    }
    export type TodoSchemaAdd = {
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
        page: number
        pageSize: number
        count: number
        todos: (Schemas.TodoSchema)[]
      }
    }
    ['POST:/todos']: {
      Body: Schemas.TodoSchemaAdd
      Response: Schemas.TodoSchema
    }
    ['GET:/todos/{todoId}']: {
      Params: {
        todoId: string
      }
      Response: Schemas.TodoSchema
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