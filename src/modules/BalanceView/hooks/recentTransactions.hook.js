import { DateTime } from "luxon";
import { useQuery } from "react-query";
import { log, logArray } from "../../../utils/logger";
import { QueryKeys } from "../../../utils/ReactQuery";
import { fetchTransactionsRequest } from "../../TransactionView/api/transactions.api";
import { manipulateTransactions } from "../../TransactionView/services/transactions.service";
import { calculateTotalSpentAndIncome } from "../services/transactions.service";

export const useFetchRecentTransactions = () => {
    
    const filters = getTimeFrame();
    const { data, isLoading, isError, isSuccess } = useQuery([QueryKeys.FETCH_TRANSACTIONS, { filters }],
        () => fetchTransactionsRequest(filters),
        {
            refetchOnWindowFocus: false,
        }
    );
    let transactions = data ?? [];
    if (isSuccess && transactions.length !== 0) {

        transactions = manipulateTransactions(transactions);
    }
    const { total, income } = calculateTotalSpentAndIncome(transactions);
    logArray(transactions);
    log(total);
    log(income);
    return { transactions, isLoading, isError, total, income };
} 

const getTimeFrame = () => {
    const { day: currentDay, month: currentMonth, year: currentYear } = DateTime.now();
    const userCycle = 10;
    let startTimeFrame, endTimeFrame;
    //TODO 10 should be user's choice
    if (currentDay > userCycle) {
        startTimeFrame = DateTime.local(currentYear, currentMonth, userCycle + 1).startOf('day').toUTC().toISO();   //'YYYY-MM-DDTHH:MM:SS.MSZ'
        endTimeFrame = DateTime.local(currentMonth === 12 ? currentYear + 1 : currentYear, 
            currentMonth + 1, userCycle).endOf('day').toUTC().toISO();
    }
    else {
        startTimeFrame = DateTime.local(currentMonth === 1 ? currentYear - 1 : currentYear, 
            currentMonth - 1, userCycle + 1).endOf('day').toUTC().toISO();
        endTimeFrame = DateTime.local(currentYear, currentMonth, userCycle).startOf('day').toUTC().toISO();
    }
    return { startTimeFrame, endTimeFrame }
};