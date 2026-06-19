import { useBody, useParams } from 'src'

import { todos } from '../../mocks/todos'

export function EditTodo () {
  const { todoId } = useParams<Api.Endpoints['PATCH:/todos/{todoId}']['params']>()
  const body = useBody<Api.Endpoints['PATCH:/todos/{todoId}']['body']>()

  const todo = todos.find(({ id }) => id === todoId)

  if (!todo) {
    return <error code='todoNotFound' status={404} />
  }

  Object.assign(todo, body)

  return <success />
}
