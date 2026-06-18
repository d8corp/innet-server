export interface TodoProps {
  type?: '' | 'Add' | 'Edit'
}

export function Todo ({ type = '' }: TodoProps) {
  if (type === 'Add') {
    return (
      <object ref='TodoAdd'>
        id: <uuid default='new' readOnly />
        created: <date default='now' readOnly />
        title: <string example='Check @innet/dom librarry' />
        done?: <boolean default={false} />
      </object>
    )
  }

  if (type === 'Edit') {
    return (
      <object ref='TodoEdit'>
        title?: <string example='Check @innet/dom librarry' />
        done?: <boolean default={false} />
      </object>
    )
  }

  return (
    <object ref='Todo'>
      id: <uuid default='new' />
      created: <date default='now' />
      title: <string example='Check @innet/dom librarry' />
      done: <boolean default={false} />
    </object>
  )
}
