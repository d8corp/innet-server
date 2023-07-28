import { httpOnStart } from '../../../utils'
import { Partner } from '../../tags'

export function App () {
  return (
    <server port={3000} onStart={httpOnStart}>
      <api description='Test CANT inc. API' prefix='/api' title='CANT inc. API' version='0.0.1'>
        <swagger path='/swagger' />
        <host url='https://cantinc.com/api' description='Production' />
        <host url='https://stage.cantinc.com/api' description='Stage' />
        <host url='http://localhost:3000/api' description='Localhost' />
        <license name='MIT' />
        <contact name='Mike' email='d8corp@mail.ru' />
        <fallback>
          <error code='unknownRequest' status={404} />
        </fallback>
        <Partner />
        <dev>
          <dts path='src/example/api.d.ts' />
        </dev>
      </api>
    </server>
  )
}
