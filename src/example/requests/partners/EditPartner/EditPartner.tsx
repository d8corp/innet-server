import { useBody, useParams } from '../../../../hooks'

export function EditPartner () {
  const params = useParams<Paths.Partners$Id.Patch.PathParameters>()
  const body = useBody<Paths.Partners$Id.Patch.RequestBody>()

  return <success>{{ params, body }}</success>
}
