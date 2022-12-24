import { useQuery } from "react-query";
import { QueryKeys } from "../../../utils/ReactQuery";
import { useTransactionsFilters } from "../../TransactionView/context/transactionsFilter.context";
import { fetchMonthlyBalance } from "../api/analytics.api";

export const useFetchBalance = () => {
    const { filters } = useTransactionsFilters();
    const { fromDate, toDate } = filters;
    const { data, isLoading, isError } = useQuery(
        [QueryKeys.FETCH_BALANCE, fromDate, toDate],
        () => fetchMonthlyBalance(fromDate, toDate)
    );
    let income = 0, outcomes = 0, balance = 0;
    if (!isLoading) {
        income = data?.income;
        outcomes = data?.outcomes;
        balance = income - (outcomes * -1);
    }
    return { income, outcomes, balance, isLoading, isError };
}