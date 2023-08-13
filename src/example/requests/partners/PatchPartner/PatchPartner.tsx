import { useParams } from '../../../../hooks'

export function PatchPartner () {
  const { id } = useParams<Paths.Partners$Id.Patch.PathParameters>()
  return <success>{{ id }}</success>
}
