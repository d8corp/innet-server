import { useSearch } from 'src'

import { todos as rootTodos } from '../todos'

export function GetTodos () {
  const {
    done,
    page,
    pageSize,
  } = useSearch<Api.Endpoints['GET:/todos']['Search']>()

  const rawTodos = done === undefined
    ? rootTodos
    : rootTodos.filter(({ done: todoDone }) => todoDone === done)

  const start = (page - 1) * pageSize
  const stop = start + Number(pageSize)
  const todos = rawTodos.slice(start, stop)

  const data: Api.Endpoints['GET:/todos']['Response']['default'] = {
    count: rootTodos.length,
    page,
    pageSize,
    todos,
  }

  return <success>{data}</success>
}
