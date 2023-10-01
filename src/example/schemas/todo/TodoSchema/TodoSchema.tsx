import { useComponentName } from 'src'

export interface TodoSchemaProps {
  body?: boolean
}

export function TodoSchema ({ body }: TodoSchemaProps = {}) {
  const componentName = useComponentName()
  const ref = `${componentName}${body ? 'Body' : ''}`

  return (
    <object ref={ref}>
      <field key='id' optional={body}>
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
      <field key='done' optional={body}>
        <boolean default={body ? false : undefined} />
      </field>
    </object>
  )
}
