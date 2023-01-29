import { useQuery } from 'react-query'
import { useUserDataStore } from '../../../shared/state/userDataStore'
import { QueryKeys } from '../../../utils/ReactQuery'
import { fetchAccountData } from '../api/account.api'

export const useAccountHook = (callback) => {
  const linkedAccountId = useUserDataStore((state) => state.linkedAccountId)
  const { data, isLoading, isError } = useQuery(
    [QueryKeys.FETCH_ACCOUNT_DATA, linkedAccountId],
    () => fetchAccountData(linkedAccountId),
    {
      refetchOnWindowFocus: false,
      onSuccess: callback,
    }
  )
  return { data, isLoading, isError }
}
