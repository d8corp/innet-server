import { httpOnStart, uiPresets } from 'src'

import { TodoEndpoints } from '../../endpoints/TodoEndpoints'
import description from './description.md'

export function App () {
  return (
    <server onStart={httpOnStart}>
      <preset>
        <header key='Cache-Control' value='no-cache, no-store, must-revalidate' />
      </preset>
      <api description={description} prefix='/api' schemaGeneration title='@innet/server Todo Template' version='0.0.1'>
        <license name='MIT' />
        <host url='http://localhost/api' />
        <contact email='d8@cantinc.com' name='Mike' />
        <ui html={uiPresets.swagger} />
        <ui html={uiPresets.scalar} path='/scalar' />
        <TodoEndpoints />
        <env is='dev'>
          <dts path='src/example/api.d.ts' />
        </env>
      </api>
      <return>
        <error code='unknownRequest' status={404} />
      </return>
    </server>
  )
}
