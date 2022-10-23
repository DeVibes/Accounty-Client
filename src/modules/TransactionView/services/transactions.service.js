import { logArray } from "../../../utils/logger";

const formatDates = transactions => 
    transactions.map(tr => {
        return {...tr, date: new Date(removeZ(tr.date))};
    });

const sortTransactionsByDate = (transactions, isDesc = false) => {
    const compareFn = isDesc ? (a, b) => new Date(removeZ(b.date)) - new Date(removeZ(a.date)) :
        (a, b) => new Date(removeZ(a.date)) - new Date(removeZ(b.date));
    return transactions.sort(compareFn);
}

const sliceTimeFromDateString = dateString => dateString?.slice(0, 10);
const removeZ = dateString => dateString?.slice(0, -1);

const calculateDailySpent = transactions => {
    transactions.reverse();
    let dailySum = 0;
    const modifiedTransactions = transactions.map((tr, index) => {
        const trDate = new Date(sliceTimeFromDateString(tr.date));
        const isNextTrSameDay = 
            trDate.getTime() === new Date(sliceTimeFromDateString(transactions[index + 1]?.date)).getTime();
        if (tr.price < 0)
            dailySum += tr.price;
        if (isNextTrSameDay) 
            return tr;
        const newTr = {
            ...tr,
            date: tr.date,
            isLast: true,
            dailySum
        }
        dailySum = 0;
        return newTr;
    });
    logArray(modifiedTransactions)
    return modifiedTransactions.reverse();
};

const markFirstPerDay = transactions => {
    transactions.reverse();
    let isFirst = true;
    const markedTransactions = transactions.map((tr, index) => {
        const trDate = new Date(sliceTimeFromDateString(tr.date));
        const isNextTrSameDay = 
            trDate.getTime() === new Date(sliceTimeFromDateString(transactions[index + 1]?.date)).getTime();
        tr = { ...tr, isFirst };
        isFirst = !isNextTrSameDay;
        return tr;
    });
    return markedTransactions.reverse();
}

export {
    // format,
    sortTransactionsByDate,
    sliceTimeFromDateString,
    calculateDailySpent,
    markFirstPerDay
}