import { useQuery } from 'react-query'
import { useUserDataStore } from '../../../shared/state/userDataStore'
import { QueryKeys } from '../../../utils/ReactQuery'
import { getTotalByCategory } from '../api/analytics.api'
import {
  mapDataForRechartPie,
  getTimeFrame,
} from '../services/analytics.service'

export const useFetchTotalByCategory = () => {
  const { fromDate, toDate } = getTimeFrame()
  const linkedAccountId = useUserDataStore((state) => state.linkedAccountId)
  let { data, isLoading, isError } = useQuery(
    [QueryKeys.FETCH_TOTAL_BY_CATEGORY, fromDate, toDate, linkedAccountId],
    () => getTotalByCategory(fromDate, toDate, linkedAccountId)
  )
  if (!isError && !isLoading) data = mapDataForRechartPie(data)
  return { data, isLoading, isError }
}
