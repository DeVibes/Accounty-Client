import { logArray } from '../../../utils/logger'

const formatDates = (transactions) =>
  transactions.map((tr) => {
    return { ...tr, date: tr.date }
  })

const sortTransactionsByDate = (transactions, isDesc = false) => {
  const compareFn = isDesc
    ? (a, b) => new Date(b.date) - new Date(a.date)
    : (a, b) => new Date(a.date) - new Date(b.date)
  return transactions.sort(compareFn)
}

const calculateDailySpent = (transactions) => {
  transactions.reverse()
  let dailySum = 0
  const modifiedTransactions = transactions.map((tr, index) => {
    const trDate = new Date(tr.date)
    const isNextTrSameDay =
      trDate.getDate() === new Date(transactions[index + 1]?.date).getDate()
    if (tr.price < 0) dailySum += tr.price
    if (isNextTrSameDay) return tr
    const newTr = {
      ...tr,
      date: tr.date,
      isLast: true,
      dailySum,
    }
    dailySum = 0
    return newTr
  })
  logArray(modifiedTransactions)
  return modifiedTransactions.reverse()
}

const markFirstPerDay = (transactions) => {
  transactions.reverse()
  let isFirst = true
  const markedTransactions = transactions.map((tr, index) => {
    const trDate = new Date(tr.date)
    const isNextTrSameDay =
      trDate.getDate() === new Date(transactions[index + 1]?.date).getDate()
    tr = { ...tr, isFirst }
    isFirst = !isNextTrSameDay
    return tr
  })
  return markedTransactions.reverse()
}

const manipulateTransactions = (transactions) => {
  const sortedTransactions = sortTransactionsByDate(transactions, true)
  const calculatedTransactions = calculateDailySpent(sortedTransactions)
  const markedTransactions = markFirstPerDay(calculatedTransactions)
  logArray(markedTransactions)
  return markedTransactions
}

export {
  formatDates,
  sortTransactionsByDate,
  calculateDailySpent,
  markFirstPerDay,
  manipulateTransactions,
}
