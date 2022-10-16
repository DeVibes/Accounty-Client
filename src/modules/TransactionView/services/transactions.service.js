const sortTransactionsByDate = (transactions, isDesc = false) => {
    const compareFn = isDesc ? (a, b) => new Date(b.date) - new Date(a.date) :
        (a, b) => new Date(a.date) - new Date(b.date);
    return transactions.sort(compareFn);
}

const sliceTimeFromDateString = dateString => dateString?.slice(0, 10);

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
    sortTransactionsByDate,
    sliceTimeFromDateString,
    calculateDailySpent,
    markFirstPerDay
}