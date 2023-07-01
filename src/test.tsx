import innet from 'innet'

import { handler } from './handler'
import { defaultOnStart } from './utils'

const app = (
  <server port={3000} onStart={defaultOnStart}>
    <api title='Test API' />
  </server>
)

innet(app, handler)
