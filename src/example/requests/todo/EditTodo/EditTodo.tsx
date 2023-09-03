import { useBody, useParams } from 'src'

import { todos } from '../todos'

export function EditTodo () {
  const { todoId } = useParams<Api.Endpoints['PATCH:/todos/{todoId}']['Params']>()
  const params = useBody<Api.Endpoints['PATCH:/todos/{todoId}']['Body']>()

  const todo = todos.find(({ id }) => id === todoId)

  if (!todo) {
    return <error code='todoNotFound' status={404} />
  }

  Object.assign(todo, params)

  return <success />
}
