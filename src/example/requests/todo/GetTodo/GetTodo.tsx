import { useParams } from 'src'

import { todos } from '../todos'

export function GetTodo () {
  const { todoId } = useParams<Api.Endpoints['GET:/todos/{todoId}']['Params']>()

  const todo = todos.find(({ id }) => id === todoId)

  if (!todo) {
    return <error code='todoNotFound' status={404} />
  }

  return <success>{todo}</success>
}
