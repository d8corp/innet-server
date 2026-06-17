import { AddTodo, DeleteTodo, EditTodo, GetTodo, GetTodos } from '../../return'
import { ListQueryParams, ListSchema, TodoSchema } from '../../schemas'

export function Todo () {
  return (
    <tag description='Todo API' name='todo'>
      <endpoint method='get' operationId='getTodos' path='/todos' summary='Returns a list of todos'>
        <param in='query' name='done'><boolean /></param>
        <ListQueryParams />
        <response description='Response Description'>
          <ListSchema key='todos'><TodoSchema /></ListSchema>
        </response>
        <return><GetTodos /></return>
      </endpoint>
      <endpoint method='post' operationId='addTodo' path='/todos' summary='Add a todo'>
        <body><TodoSchema body /></body>
        <response><TodoSchema /></response>
        <return><AddTodo /></return>
      </endpoint>
      <endpoint method='get' operationId='getTodo' path='/todos/{todoId}' summary='Returns a todo'>
        <param in='path' name='todoId'><uuid /></param>
        <response description='Response Description'><TodoSchema /></response>
        <return><GetTodo /></return>
      </endpoint>
      <endpoint method='patch' operationId='setTodo' path='/todos/{todoId}' summary='Change a todo'>
        <param in='path' name='todoId'><uuid /></param>
        <body>
          <object>
            done?: <boolean />
            title?: <string />
          </object>
        </body>
        <return><EditTodo /></return>
      </endpoint>
      <endpoint method='delete' operationId='deleteTodo' path='/todos/{todoId}' summary='Delete a todo'>
        <param in='path' name='todoId'><uuid /></param>
        <response status='noContent' />
        <return><DeleteTodo /></return>
      </endpoint>
    </tag>
  )
}
