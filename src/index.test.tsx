import innet from 'innet'
import { Watch } from 'watch-state'

import { handler } from './handler'
import { useApi } from './hooks'

function getLog () {
  const fn = jest.fn()
  const Log = () => {
    const { docs } = useApi()

    fn(docs)
  }

  return [Log, fn]
}

function run (app: any) {
  const server = new Watch(() => {
    innet(app, handler)
  })

  server.destroy()
}

describe('server', () => {
  test('minimal setup', () => {
    const [Log, fn] = getLog()

    run(
      <server port={3000}>
        <api title='CANT inc. API' version='0.0.1'>
          <Log />
        </api>
      </server>,
    )

    expect(fn).toBeCalledWith({
      openapi: '3.1.0',
      info: {
        title: 'CANT inc. API',
        version: '0.0.1',
      },
      components: {},
      paths: {},
      servers: [],
    })
  })
  test('main', () => {
    const [Log, fn] = getLog()

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

    run(
      <server port={3000}>
        <api title='CANT inc. API' version='0.0.1'>
          <stand url='https://cantinc.com/api' description='Production' />
          <stand url='https://stage.cantinc.com/api' description='Stage' />
          <license name='MIT' />
          <contact name='Mike' email='d8corp@mail.ru' />
          <tag name='partner' description='Any users on the service'>
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
          <Log />
        </api>
      </server>,
    )

    expect(fn).toBeCalledWith({
      openapi: '3.1.0',
      info: {
        title: 'CANT inc. API',
        version: '0.0.1',
        license: {
          name: 'MIT',
        },
        contact: {
          name: 'Mike',
          email: 'd8corp@mail.ru',
        },
      },
      components: {},
      paths: {
        '/partners': {
          get: {
            summary: 'Returns a list of partners',
            description: 'You cant use partners as you wish!',
            tags: [
              'partner',
            ],
          },
        },
        '/partners/{id}': {
          get: {
            tags: [
              'partner',
            ],
          },
        },
      },
      servers: [
        {
          url: 'https://cantinc.com/api',
          description: 'Production',
        },
        {
          url: 'https://stage.cantinc.com/api',
          description: 'Stage',
        },
      ],
      tags: [
        {
          name: 'partner',
          description: 'Any users on the service',
        },
      ],
    })
  })
})
