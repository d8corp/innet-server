export interface TodoProps {
  type?: '' | 'Add' | 'Edit'
}

export function Todo ({ type = '' }: TodoProps) {
  if (type === 'Add') {
    return (
      <object ref='TodoAdd'>
        id?: <uuid default='new' readOnly />
        created?: <date default='now' readOnly />
        changed?: <date default={null} nullable readOnly />
        title: <string example='Check @innet/dom librarry' />
        done?: <boolean default={false} />
      </object>
    )
  }

  if (type === 'Edit') {
    return (
      <object ref='TodoEdit'>
        changed?: <date default='now' readOnly />
        title?: <string example='Check @innet/dom librarry' />
        done?: <boolean />
      </object>
    )
  }

  return (
    <object ref='Todo'>
      id: <uuid />
      created: <date />
      changed: <date nullable />
      title: <string example='Check @innet/dom librarry' />
      done: <boolean />
    </object>
  )
}
