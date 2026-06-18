export function Todo () {
  return (
    <object ref='Todo'>
      id: <uuid default='new' readOnly />
      created: <date default='now' readOnly />
      title: <string example='Check @innet/dom librarry' />
      done: <boolean default={false} />
    </object>
  )
}
