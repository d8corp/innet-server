import { generateTypes } from './generateTypes'

const docs: any = {
  components: {
    schemas: {
      TodoSchema: {
        properties: {
          done: { type: 'boolean' },
          id: { format: 'uuid', type: 'string' },
          title: { example: 'Create todo', type: 'string' },
        },
        required: ['id', 'title', 'done'],
        type: 'object',
      },
      TodoSchemaAdd: {
        properties: {
          done: { default: false, type: 'boolean' },
          id: { format: 'uuid', type: 'string', 'x-default': 'new' },
          title: { example: 'Create todo', type: 'string' },
        },
        required: ['title'],
        type: 'object',
      },
    },
  },
  info: {
    contact: { email: 'd8@cantinc.com', name: 'Mike' },
    description: '## This is a simple example of todos.\n\nHere you can find API endpoints to handle todos.\n',
    license: { name: 'MIT' },
    title: '@innet/server Todo Template',
    version: '0.0.1',
  },
  openapi: '3.1.0',
  paths: {
    '/todos': {
      get: {
        parameters: [
          { in: 'query', name: 'done', schema: { type: 'boolean' } },
          { in: 'query', name: 'page', schema: { default: 1, type: 'number' } },
          { in: 'query', name: 'pageSize', schema: { default: 12, type: 'number' } },
        ],
        responses: {
          default: {
            content: {
              'application/json': {
                schema: {
                  description: 'test1',
                  properties: {
                    count: { default: 11, type: 'number' },
                    page: {
                      default: 1,
                      format: 'int32',
                      type: 'integer',
                    },
                    pageSize: { example: 10, type: 'number' },
                    todos: {
                      items: { $ref: '#/components/schemas/TodoSchema' },
                      type: 'array',
                    },
                  },
                  required: ['page', 'pageSize', 'count', 'todos'],
                  type: 'object',
                },
              },
            },
            description: 'Response Description',
          },
        },
        summary: 'Returns a list of todos',
        tags: ['todo'],
      },
      post: {
        requestBody: {
          content: {
            'application/json': { schema: { $ref: '#/components/schemas/TodoSchemaAdd' } },
            'application/x-www-form-urlencoded': { schema: { $ref: '#/components/schemas/TodoSchemaAdd' } },
            'multipart/form-data': { schema: { $ref: '#/components/schemas/TodoSchemaAdd' } },
          },
        },
        summary: 'Add a todo',
        tags: ['todo'],
      },
    },
    '/todos/{todoId}': {
      delete: {
        parameters: [
          {
            in: 'path',
            name: 'todoId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        ],
        summary: 'Delete a todo',
        tags: ['todo'],
      },
      get: {
        parameters: [
          {
            in: 'path',
            name: 'todoId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        ],
        responses: {
          default: {
            content: { 'application/json': { schema: { $ref: '#/components/schemas/TodoSchema' } } },
            description: 'Response Description',
          },
        },
        summary: 'Returns a todo',
        tags: ['todo'],
      },
      patch: {
        parameters: [
          {
            in: 'path',
            name: 'todoId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                properties: {
                  done: { type: 'boolean' },
                  title: { type: 'string' },
                },
                type: 'object',
              },
            },
            'application/x-www-form-urlencoded': {
              schema: {
                properties: {
                  done: { type: 'boolean' },
                  title: { type: 'string' },
                },
                type: 'object',
              },
            },
            'multipart/form-data': {
              schema: {
                properties: {
                  done: { type: 'boolean' },
                  title: { type: 'string' },
                },
                type: 'object',
              },
            },
          },
        },
        summary: 'Change a todo',
        tags: ['todo'],
      },
    },
  },
  tags: [{ description: 'Todo API', name: 'todo' }],
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
