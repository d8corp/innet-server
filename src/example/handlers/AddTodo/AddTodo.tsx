import { useBody } from 'src'

import { todos } from '../../mocks/todos'

export function AddTodo () {
  const todo = useBody<Api.Endpoints['POST:/todos']['body']>()

  todos.push(todo)

  return <success>{todo}</success>
}
