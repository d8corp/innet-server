import { useSearch } from '../../../../hooks'

export function GetPartners () {
  const { test } = useSearch<Paths.Partners.Get.QueryParameters>()
  return <success>{{ test }}</success>
}
