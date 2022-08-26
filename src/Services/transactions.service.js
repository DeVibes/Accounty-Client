import { mockTransactions } from "../Data/transactions.mock";

export const getTransactions = () => {
    try {
        const response = mockTransactions;
        const transactions = sortTransactionsByDate(response);
        if (transactions?.length === 0)
            return [];
        return calculateDailySpent(transactions).reverse();
    } catch (error) {
        console.error(error.message);
        return [];
    }
};

const sortTransactionsByDate = (transactions, isDesc = false) => {
    const compareFn = isDesc ? (a, b) => new Date(b.date) - new Date(a.date) :
        (a, b) => new Date(a.date) - new Date(b.date);
    return transactions.sort(compareFn);
}

const sliceTimeFromDateString = dateString => dateString?.slice(0, 10);

const calculateDailySpent = transactions => {
    let dailySum = 0;
    return transactions.map((tr, index) => {
        const trDate = new Date(sliceTimeFromDateString(tr.date));
        const isNextTrSameDay = 
            trDate.getTime() === new Date(sliceTimeFromDateString(transactions[index + 1]?.date)).getTime();
        dailySum += tr.price;
        if (isNextTrSameDay) 
            return tr;
        const newTr = {
            ...tr,
            date: new Date(tr.date),
            isLast: true,
            dailySum
        }
        dailySum = 0;
        return newTr;
    });
};