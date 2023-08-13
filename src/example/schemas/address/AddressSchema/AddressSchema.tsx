import { useComponentName } from '../../../../hooks'
import { LocationSchema } from '../../location/LocationSchema'

export function AddressSchema () {
  const ref = useComponentName()

  return (
    <object ref={ref}>
      <field key='id'><number /></field>
      <field key='active'><null /></field>
      <field key='city'><string description='City description' values={['msk', 'sml']} /></field>
      <field key='location'><LocationSchema /></field>
    </object>
  )
}