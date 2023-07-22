import { useSearch } from '../../../../hooks'
import { success } from '../../../../plugins'

export function GetPartner () {
  return <success>{useSearch()}</success>
}
