import { useChildren } from '@innet/jsx'

export function ListSchema () {
  const children = useChildren()

  return (
    <object description='test1'>
      <field key='page'><integer default={1} /></field>
      <field key='pageSize'><number example={10} /></field>
      <field key='count'><number default={11} /></field>
      <field key='partners'>
        <array>
          {children}
        </array>
      </field>
    </object>
  )
}
