import { type ServerStartParams } from 'src'

import { Todo } from '../../tags'
import description from './description.md'

const handleStart = ({ port, https }: ServerStartParams) => {
  console.log(`http${https ? 's' : ''}://localhost:${port}/api/ui`)
}

export function App () {
  return (
    <server onStart={handleStart}>
      <api description={description} prefix='/api' title='@innet/server Todo Template' version='0.0.1'>
        <license name='MIT' />
        <host url='http://localhost/api' />
        <contact name='Mike' email='d8@cantinc.com' />
        <swagger path='/ui' />
        <preset>
          <header key='Cache-Control' value='no-cache, no-store, must-revalidate' />
        </preset>
        <Todo />
        <env is='dev'>
          <dts path='src/example/api.d.ts' />
        </env>
      </api>
      <return>
        <header key='Cache-Control' value='no-cache, no-store, must-revalidate' />
        <error code='unknownRequest' status={404} />
      </return>
    </server>
  )
}
