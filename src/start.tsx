import innet from 'innet'
import { useChildren } from '@innet/jsx'

import { handler } from './handler'
import { useNewRef, useParams } from './hooks'
import { dts, success } from './plugins'
import { defaultOnStart } from './utils'

const AddressSchema = () => {
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

const PartnerSchema = () => {
  const ref = useNewRef()

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

const ListSchema = () => {
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

const Test = () => (<success>{useParams()}</success>)

const app = (
  <server port={3000} onStart={defaultOnStart}>
    <api description='Test CANT inc. API' prefix='/api' title='CANT inc. API' version='0.0.1'>
      <swagger path='/' />
      <stand url='https://cantinc.com/api' description='Production' />
      <stand url='https://stage.cantinc.com/api' description='Stage' />
      <stand url='http://localhost:3000/api' description='Localhost' />
      <license name='MIT' />
      <contact name='Mike' email='d8corp@mail.ru' />
      <fallback>
        <error code='unknownRequest' status={404} />
      </fallback>
      <tag name='partner' description='Partners of CANT inc.'>
        <endpoint
          method='get'
          path='/partners'
          summary='Returns a list of partners'
          description='You cant use partners as you wish!'>
          <param in='query' name='id'>
            <string />
            <array><string /></array>
          </param>
          <response description='Response Description'>
            <ListSchema>
              <PartnerSchema />
            </ListSchema>
          </response>
          <request>
            <proxy to='https://cantinc.com' />
          </request>
        </endpoint>
        <endpoint method='get' path='/partners/{id}'>
          <param in='path' name='id'><string min={1} max={10} /></param>
          <response description='Partner Response Description'>
            <PartnerSchema />
          </response>
          <request>
            <Test />
          </request>
        </endpoint>
        <endpoint method='patch' path='/partners/{id}'>
          <param in='path' name='id'><string /></param>
          <body type='application/json'>
            <object>
              <field key='name'><string example='CANTent.' /></field>
              <field key='gift'><boolean /></field>
              <field optional key='addresses'>
                <array>
                  <number description='address id' />
                </array>
              </field>
            </object>
          </body>
          <body type='application/x-www-form-urlencoded'>
            <object>
              <field key='name'><string example='CANTent.' /></field>
              <field key='gift'><boolean /></field>
              <field optional key='addresses[]'>
                <number description='address id' />
              </field>
            </object>
          </body>
          <response description='Partner Response Description'>
            <PartnerSchema />
          </response>
          <request>
            <error>
              {{ test: 'patch partner' }}
            </error>
          </request>
        </endpoint>
      </tag>
      <dev>
        <dts path='src/api.d.ts' />
      </dev>
    </api>
  </server>
)

innet(app, handler)
