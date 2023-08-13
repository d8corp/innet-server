import { useComponentName } from '../../../../hooks'

export function EditPartnerSchema () {
  const ref = useComponentName()

  return (
    <object>
      <field key='name'><string example='CANTent.' /></field>
      <field key='gift'><boolean /></field>
      <field optional key='addresses'>
        <array>
          <number description='address id' />
        </array>
      </field>
    </object>
  )
}
