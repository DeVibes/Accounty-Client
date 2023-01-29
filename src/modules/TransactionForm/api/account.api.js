import { apiRoute } from '../../../config'
import { Session } from '../../../utils/session'

export const fetchAccountData = async (accountId) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${Session.getData('apiAccessToken')}`,
    },
  }
  const response = await fetch(
    `${apiRoute}/accounts/${accountId}`,
    requestOptions
  )
  const responseJson = await response.json()
  return responseJson
}
