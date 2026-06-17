export interface ListSchemaProps {
  children: any
  key: string
}

export function ListSchema ({
  children,
  key,
}: ListSchemaProps) {
  return (
    <object>
      page: <integer default={1} />
      pageSize: <number example={10} />
      count: <number default={11} />
      <field key={key}>
        <array>
          {children}
        </array>
      </field>
    </object>
  )
}
