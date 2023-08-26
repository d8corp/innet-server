import { useComponentName } from '../../../../hooks'

export function EditPartnerSchema () {
  const ref = useComponentName()

  return (
    <object ref={ref}>
      <field optional key='name'>
        <string example='CANTent.' />
      </field>
      <field optional key='gift'>
        <boolean />
      </field>
      <field optional key='icon'>
        <binary
          accept='image/*'
          description='A square icon of the partner'
        />
      </field>
      <field optional key='addresses'>
        <array>
          <number description='address id' />
        </array>
      </field>
    </object>
  )
}
