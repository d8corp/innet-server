import { useComponentName } from 'src'

export interface TodoSchemaProps {
  add?: boolean
}

export function TodoSchema (props: TodoSchemaProps) {
  const componentName = useComponentName()
  const ref = `${componentName}${props?.add ? 'Add' : ''}`

  return (
    <object ref={ref}>
      <field optional={props?.add} key='id'>
        <uuid default={props?.add ? 'new' : undefined} />
      </field>
      <field key='title'>
        <string example='Create todo' />
      </field>
      <field optional={props?.add} key='done'>
        <boolean default={props?.add ? false : undefined} />
      </field>
    </object>
  )
}
