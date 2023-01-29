import { apiRoute } from '../../../config'
import { Session } from '../../../utils/session'

export const fetchMonthlyBalance = async (
  fromDateISOString,
  toDateISOString,
  linkedAccountId
) => {
  if (!fromDateISOString || !toDateISOString || !linkedAccountId) return
  const queryParams = `?fromDate=${fromDateISOString}&toDate=${toDateISOString}`
  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${Session.getData('apiAccessToken')}`,
    },
  }
  const response = await fetch(
    `${apiRoute}/transactions/${linkedAccountId}/balance${queryParams}`,
    requestOptions
  )
  if (response.status === 500) throw new Error('Server error')
  return await response.json()
}

export const getTotalByCategory = async (
  fromDateISOString,
  toDateISOString,
  linkedAccountId
) => {
  if (!fromDateISOString || !toDateISOString || !linkedAccountId) return
  const queryParams = `?fromDate=${fromDateISOString}&toDate=${toDateISOString}`
  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${Session.getData('apiAccessToken')}`,
    },
  }
  const response = await fetch(
    `${apiRoute}/transactions/${linkedAccountId}/category${queryParams}`,
    requestOptions
  )
  if (response.status === 500) throw new Error('Server error')
  return await response.json()
}

export const getYearlyTotalByMonth = async (
  fromDateISOString,
  toDateISOString,
  linkedAccountId
) => {
  if (!fromDateISOString || !toDateISOString || !linkedAccountId) return
  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${Session.getData('apiAccessToken')}`,
    },
  }
  const queryParams = `?fromDate=${fromDateISOString}&toDate=${toDateISOString}`
  const response = await fetch(
    `${apiRoute}/transactions/${linkedAccountId}/yearly${queryParams}`,
    requestOptions
  )
  if (response.status === 500) throw new Error('Server error')
  return await response.json()
}
