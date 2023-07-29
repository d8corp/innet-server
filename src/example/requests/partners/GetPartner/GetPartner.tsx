import { useParams } from '../../../../hooks'

export function GetPartner () {
  const { id } = useParams<Paths.Partners$Id.Get.PathParameters>()
  return <success>{{ id }}</success>
}
