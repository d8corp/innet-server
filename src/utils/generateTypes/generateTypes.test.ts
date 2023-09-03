import { generateTypes } from './generateTypes'

const docs: any = {
  openapi: '3.1.0',
  info: {
    description: '## This is a simple example of todos.\n\nHere you can find API endpoints to handle todos.\n',
    version: '0.0.1',
    title: '@innet/server Todo Template',
    license: { name: 'MIT' },
    contact: { name: 'Mike', email: 'd8@cantinc.com' },
  },
  paths: {
    '/todos': {
      get: {
        summary: 'Returns a list of todos',
        tags: ['todo'],
        parameters: [
          { in: 'query', name: 'done', schema: { type: 'boolean' } },
          { in: 'query', name: 'page', schema: { default: 1, type: 'number' } },
          { in: 'query', name: 'pageSize', schema: { default: 12, type: 'number' } },
        ],
        responses: {
          default: {
            description: 'Response Description',
            content: {
              'application/json': {
                schema: {
                  description: 'test1',
                  type: 'object',
                  properties: {
                    page: {
                      default: 1,
                      type: 'integer',
                      format: 'int32',
                    },
                    pageSize: { example: 10, type: 'number' },
                    count: { default: 11, type: 'number' },
                    todos: {
                      type: 'array',
                      items: { $ref: '#/components/schemas/TodoSchema' },
                    },
                  },
                  required: ['page', 'pageSize', 'count', 'todos'],
                },
              },
            },
          },
        },
      },
      post: {
        summary: 'Add a todo',
        tags: ['todo'],
        requestBody: {
          content: {
            'application/json': { schema: { $ref: '#/components/schemas/TodoSchemaAdd' } },
            'application/x-www-form-urlencoded': { schema: { $ref: '#/components/schemas/TodoSchemaAdd' } },
            'multipart/form-data': { schema: { $ref: '#/components/schemas/TodoSchemaAdd' } },
          },
        },
      },
    },
    '/todos/{todoId}': {
      get: {
        summary: 'Returns a todo',
        tags: ['todo'],
        parameters: [
          {
            in: 'path',
            name: 'todoId',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        ],
        responses: {
          default: {
            description: 'Response Description',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/TodoSchema' } } },
          },
        },
      },
      patch: {
        summary: 'Change a todo',
        tags: ['todo'],
        parameters: [
          {
            in: 'path',
            name: 'todoId',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  done: { type: 'boolean' },
                  title: { type: 'string' },
                },
              },
            },
            'application/x-www-form-urlencoded': {
              schema: {
                type: 'object',
                properties: {
                  done: { type: 'boolean' },
                  title: { type: 'string' },
                },
              },
            },
            'multipart/form-data': {
              schema: {
                type: 'object',
                properties: {
                  done: { type: 'boolean' },
                  title: { type: 'string' },
                },
              },
            },
          },
        },
      },
      delete: {
        summary: 'Delete a todo',
        tags: ['todo'],
        parameters: [
          {
            in: 'path',
            name: 'todoId',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        ],
      },
    },
  },
  tags: [{ name: 'todo', description: 'Todo API' }],
  components: {
    schemas: {
      TodoSchema: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
          title: { example: 'Create todo', type: 'string' },
          done: { type: 'boolean' },
        },
        required: ['id', 'title', 'done'],
      },
      TodoSchemaAdd: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid', 'x-default': 'new' },
          title: { example: 'Create todo', type: 'string' },
          done: { default: false, type: 'boolean' },
        },
        required: ['title'],
      },
    },
  },
}

const serverTypes = `declare namespace Api {
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
}`

describe('generateTypes', () => {
  it('should works', () => {
    expect(generateTypes(docs)).toBe(serverTypes)
  })
})
