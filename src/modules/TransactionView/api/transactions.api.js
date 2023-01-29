import { apiRoute } from '../../../config'
import { Session } from '../../../utils/session'

export const fetchTransactionsRequest = async (filters, page) => {
  const { fromDate, toDate, linkedAccountId } = filters
  let queryString = `?page=${page}`
  if (fromDate != null && toDate != null) {
    queryString += `&fromDate=${fromDate}&toDate=${toDate}`
  }
  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${Session.getData('apiAccessToken')}`,
    },
  }
  const response = await fetch(
    `${apiRoute}/transactions/${linkedAccountId}/all${queryString}`,
    requestOptions
  )
  return await response.json()
}

export const postTransactionRequest = async ({
  newTransaction,
  linkedAccountId,
}) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Session.getData('apiAccessToken')}`,
    },
    body: JSON.stringify(newTransaction),
  }
  const response = await fetch(
    `${apiRoute}/transactions/${linkedAccountId}`,
    requestOptions
  )
}

export const patchTransactionRequest = async ({
  linkedAccountId,
  transactionId,
  updated,
}) => {
  const requestOptions = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Session.getData('apiAccessToken')}`,
    },
    body: JSON.stringify(updated),
  }
  const response = await fetch(
    `${apiRoute}/transactions/${linkedAccountId}/${transactionId}`,
    requestOptions
  )
}

export const deleteTransactionRequest = async (transactionId) => {
  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Session.getData('apiAccessToken')}`,
    },
  }
  const response = await fetch(
    `${apiRoute}/transactions/${transactionId}`,
    requestOptions
  )
}
