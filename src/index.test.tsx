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

    run(
      <server port={3000}>
        <api title='CANT inc. API' version='0.0.1'>
          <stand url='https://cantinc.com' description='Production' />
          <stand url='https://stage.cantinc.com' description='Stage' />
          <license name='MIT' />
          <contact name='Mike' email='d8corp@mail.ru' />
          <tag name='user' description='Any users on the service'>
            <get path='/user/{id}'>
              <response>
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
              </response>
              <request>
                <log />
              </request>
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
      paths: {},
      servers: [
        {
          url: 'https://cantinc.com',
          description: 'Production',
        },
        {
          url: 'https://stage.cantinc.com',
          description: 'Stage',
        },
      ],
      tags: [
        {
          name: 'user',
          description: 'Any users on the service',
        },
      ],
    })
  })
})
