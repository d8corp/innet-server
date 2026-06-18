export interface ListSchemaProps {
  children: JSX.Element
  key: string
}

export function ListSchema ({
  children,
  key,
}: ListSchemaProps) {
  return (
    <object ref={`ListSchema${key[0].toUpperCase()}${key.slice(1)}`}>
      page: <number default={1} />
      pageSize: <number example={10} />
      count: <number default={11} />
      {key}: <array>{children}</array>
    </object>
  )
}
