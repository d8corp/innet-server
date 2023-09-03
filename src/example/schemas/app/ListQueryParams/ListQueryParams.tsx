export function ListQueryParams () {
  return (
    <>
      <param
        in='query'
        name='page'>
        <number default={1} />
      </param>
      <param
        in='query'
        name='pageSize'>
        <number default={12} />
      </param>
    </>
  )
}
