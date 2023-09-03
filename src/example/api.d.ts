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
    }
    ['POST:/todos']: {
      Body: Schemas.TodoSchemaAdd
    }
    ['GET:/todos/{todoId}']: {
      Params: {
        todoId: string
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