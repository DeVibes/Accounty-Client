import { serverApiClient } from '../../../utils/API/ApiClient'

export const fetchAccountData = async (accountId) => {
  try {
    const url = `/accounts/${accountId}`
    const data = await serverApiClient.get(url)
    return data
  } catch (error) {}
}
