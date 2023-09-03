import { useBody } from 'src'

import { todos } from '../todos'

export function AddTodo () {
  const { file, ...todo } = useBody<Api.Endpoints['POST:/todos']['Body']>()

  todos.push({
    ...todo,
    created: new Date(),
    file: file?.originalFilename,
  })

  return <success>{todo}</success>
}
