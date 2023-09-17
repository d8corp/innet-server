import { useParams } from 'src'

import { todos } from '../todos'

export function DeleteTodo () {
  const { todoId } = useParams<Api.Endpoints['DELETE:/todos/{todoId}']['Params']>()

  const todoIndex = todos.findIndex(({ id }) => id === todoId)

  if (todoIndex === -1) {
    return <error code='todoNotFound' status={404} />
  }

  todos.splice(todoIndex, 1)

  return <success />
}
