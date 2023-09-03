import { useComponentName } from 'src'

export interface TodoSchemaProps {
  body?: boolean
}

export function TodoSchema ({ body }: TodoSchemaProps = {}) {
  const componentName = useComponentName()
  const ref = `${componentName}${body ? 'Body' : ''}`

  return (
    <object ref={ref}>
      <field optional={body} key='id'>
        <uuid default={body ? 'new' : undefined} />
      </field>
      <field key='title'>
        <string example='Check @innet/dom librarry' />
      </field>
      {!body && (
        <field key='created'>
          <date />
        </field>
      )}
      <field optional key='file'>
        {body ? <binary /> : <string description='Origin file name' />}
      </field>
      <field optional={body} key='done'>
        <boolean default={body ? false : undefined} />
      </field>
    </object>
  )
}
