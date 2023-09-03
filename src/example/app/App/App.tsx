import { type ServerStartParams } from 'src'

import { Todo } from '../../tags'
import description from './description.md'

const handleStart = ({ port, https }: ServerStartParams) => {
  console.log(`http${https ? 's' : ''}://localhost:${port}/api/swagger`)
}

export function App () {
  return (
    <server onStart={handleStart}>
      <api description={description} prefix='/api' title='@innet/server Todo Template' version='0.0.1'>
        <swagger path='/swagger' />
        <license name='MIT' />
        <host url='http://localhost/api' />
        <contact name='Mike' email='d8@cantinc.com' />
        <fallback>
          <error code='unknownRequest' status={404} />
        </fallback>
        <Todo />
        <dev>
          <dts path='src/example/api.d.ts' />
        </dev>
      </api>
    </server>
  )
}
