import innet from 'innet'
import { useChildren } from '@innet/jsx'

import { handler } from './handler'
import { useNewRef } from './hooks'
import { dts } from './plugins'
import { defaultOnStart } from './utils'

const Address = () => {
  const ref = useNewRef()

  return (
    <object ref={ref}>
      <field key='id'><number /></field>
      <field key='active'><null /></field>
      <field key='city'><string description='City description' values={['msk', 'sml']} /></field>
      <field key='location'><typle><number /><number /></typle></field>
    </object>
  )
}

const Partner = () => {
  const ref = useNewRef()

  return (
    <object ref={ref}>
      <field key='id'><string example='cantent' /></field>
      <field key='name'><string example='CANTent.' /></field>
      <field key='gift'><boolean /></field>
      <field optional key='addresses'>
        <array>
          <Address />
        </array>
      </field>
    </object>
  )
}

const List = () => {
  const children = useChildren()

  return (
    <object>
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

const app = (
  <server port={3000} onStart={defaultOnStart}>
    <api description='Test CANT inc. API' prefix='/api' title='CANT inc. API' version='0.0.1'>
      <swagger path='/' />
      <stand url='https://cantinc.com/api' description='Production' />
      <stand url='https://stage.cantinc.com/api' description='Stage' />
      <license name='MIT' />
      <contact name='Mike' email='d8corp@mail.ru' />
      <tag name='partner' description='Partners of CANT inc.'>
        <endpoint
          method='get'
          path='/partners'
          summary='Returns a list of partners'
          description='You cant use partners as you wish!'>
          <response description='Response Description'>
            <List>
              <Partner />
            </List>
          </response>
          <request>
            <log />
          </request>
        </endpoint>
        <endpoint method='get' path='/partners/{id}'>
          <response description='Partner Response Description'>
            <Partner />
          </response>
        </endpoint>
        <endpoint method='patch' path='/partners/{id}'>
          <response description='Partner Response Description'>
            <Partner />
          </response>
        </endpoint>
      </tag>
      <dts path='src/api.d.ts' />
    </api>
  </server>
)

innet(app, handler)
