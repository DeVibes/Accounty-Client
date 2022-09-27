// import { fetchTransactions } from "../API/transactions.api";
// import { mockTransactions } from "../Data/transactions.mock";
// import { logArray } from "../logger";

// export const getTransactions = async () => {
//     try {
//         // const response = mockTransactions;
//         const response = await fetchTransactions();
//         const transactions = sortTransactionsByDate(response);
//         if (transactions?.length === 0)
//             return [];
//             const updatedTransactions = calculateDailySpent(transactions).reverse();
//             logArray(updatedTransactions);
//             return updatedTransactions;
//     } catch (error) {
//         console.error(error.message);
//         return [];
//     }
// };

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
    return modifiedTransactions.reverse();
};

export {
    sortTransactionsByDate,
    sliceTimeFromDateString,
    calculateDailySpent
}