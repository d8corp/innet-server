import { AddTodo, DeleteTodo, EditTodo, GetTodo, GetTodos } from '../../handlers'
import { ListQueryParams, ListSchema, Todo } from '../../schemas'

export function TodoEndpoints () {
  return (
    <tag description='Todo API' name='Todo'>
      <endpoint method='get' operationId='getTodos' path='/todos' summary='Get list of todos'>
        <param in='query' name='done'><boolean /></param>
        <ListQueryParams />
        <response description='Response Description'>
          <ListSchema key='todos'><Todo /></ListSchema>
        </response>
        <return><GetTodos /></return>
      </endpoint>
      <endpoint method='post' operationId='addTodo' path='/todos' summary='Add a todo'>
        <body><Todo /></body>
        <response><Todo /></response>
        <return><AddTodo /></return>
      </endpoint>
      <endpoint method='get' operationId='getTodo' path='/todos/{todoId}' summary='Returns a todo'>
        <param in='path' name='todoId'><uuid /></param>
        <response description='Response Description'><Todo /></response>
        <return><GetTodo /></return>
      </endpoint>
      <endpoint method='patch' operationId='setTodo' path='/todos/{todoId}' summary='Change a todo'>
        <param in='path' name='todoId'><uuid /></param>
        <body>
          <Todo />
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
