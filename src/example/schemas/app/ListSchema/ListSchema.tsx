export interface ListSchemaProps {
  children: JSX.Element
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
      {key}: <array>{children}</array>
    </object>
  )
}
