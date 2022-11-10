import { useQuery } from "react-query";
import { log, logArray } from "../../../utils/logger";
import { QueryKeys } from "../../../utils/ReactQuery";
import { fetchTransactionsRequest } from "../../TransactionView/api/transactions.api";
import { calculateTotalSpentAndIncome } from "../services/transactions.service";

export const useFetchRecentTransactions = () => {
    const { data, isLoading, isError } = useQuery(QueryKeys.FETCH_TRANSACTIONS, 
        fetchTransactionsRequest,
        {
            refetchOnWindowFocus: false,
        }
    );
    let transactions = data ?? [];
    const { total, income } = calculateTotalSpentAndIncome(transactions);
    logArray(transactions);
    log(total);
    log(income);
    return { transactions, isLoading, isError, total, income };
} 