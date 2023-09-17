import { useBody } from 'src'

import { todos } from '../todos'

export function AddTodo () {
  const todo = useBody<Api.Endpoints['POST:/todos']['Body']>()

  todos.push({
    ...todo,
    created: new Date(),
  })

  return <success>{todo}</success>
}
