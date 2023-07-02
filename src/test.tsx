import innet from 'innet'

import { handler } from './handler'
import { defaultOnStart } from './utils'

const Partner = () => {
  return (
    <object>
      <field key='id'><number /></field>
      <field key='name'><string /></field>
      <field key='roles'><array><number /></array></field>
      <field nullable key='addresses'>
        <object>
          <field key='id'><number /></field>
          <field key='city'><enum values={['Moscow', 'Smolensk']} /></field>
          <field key='location'><typle><number /><number /></typle></field>
        </object>
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
        <get path='/partners' summary='Returns a list of partners' description='You cant use partners as you wish!'>
          <response>
            <array>
              <Partner />
            </array>
          </response>
          <request>
            <log />
          </request>
        </get>
        <get path='/partners/{id}'>
          <response>
            <Partner />
          </response>
        </get>
      </tag>
    </api>
  </server>
)

innet(app, handler)
