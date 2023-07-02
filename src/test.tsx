import innet from 'innet'

import { handler } from './handler'
import { useNewRef } from './hooks'
import { defaultOnStart } from './utils'

const Partner = () => {
  const ref = useNewRef()

  return (
    <object ref={ref}>
      <field key='id'><string example='cantent' /></field>
      <field key='name'><string example='CANTent.' /></field>
      <field optional key='addresses'>
        <array>
          <object>
            <field key='id'><number /></field>
            <field key='city'><enum values={['Moscow', 'Smolensk']} /></field>
            <field key='location'><typle><number /><number /></typle></field>
          </object>
        </array>
      </field>
    </object>
  )
}

const app = (
  <server port={3000} onStart={defaultOnStart}>
    <api prefix='/api' title='CANT inc. API' version='0.0.1'>
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
            <object>
              <field key='page'><integer default={1} /></field>
              <field key='pageSize'><number example={10} /></field>
              <field key='count'><number default={11} /></field>
              <field key='partners'>
                <array>
                  <Partner />
                </array>
              </field>
            </object>
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
    </api>
  </server>
)

innet(app, handler)
