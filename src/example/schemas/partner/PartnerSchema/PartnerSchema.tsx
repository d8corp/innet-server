import { useComponentName } from '../../../../hooks'
import { AddressSchema } from '../../address/AddressSchema'

export function PartnerSchema () {
  const ref = useComponentName()

  return (
    <object ref={ref}>
      <field key='id'><string example='cantent' /></field>
      <field key='name'><string example='CANTent.' /></field>
      <field key='gift'><boolean /></field>
      <field optional key='addresses'>
        <array>
          <AddressSchema />
        </array>
      </field>
    </object>
  )
}
