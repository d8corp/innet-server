export interface ListSchemaProps {
  children: any
  key: string
}

export function ListSchema ({
  children,
  key,
}: ListSchemaProps) {
  return (
    <object description='test1'>
      <field key='page'><integer default={1} /></field>
      <field key='pageSize'><number example={10} /></field>
      <field key='count'><number default={11} /></field>
      <field key={key}>
        <array>
          {children}
        </array>
      </field>
    </object>
  )
}
