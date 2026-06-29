export function ListQueryParams () {
  return (
    <>
      <param in='query' name='page'>
        <integer default={1} />
      </param>
      <param in='query' name='pageSize'>
        <integer default={12} />
      </param>
    </>
  )
}
