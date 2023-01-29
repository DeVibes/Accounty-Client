import { useQuery } from "react-query";
import { QueryKeys } from "../../../utils/ReactQuery";
import { useTransactionsFilters } from "../../TransactionView/context/transactionsFilter.context";
import { fetchMonthlyBalance } from "../api/analytics.api";
import { getTimeFrame } from "../services/analytics.service";
import { useUserDataContext } from "../../../shared/context/user.context";
import { useUserDataStore } from "../../../shared/state/userDataStore";

export const useFetchBalance = () => {
    // const { filters, setDateRange  } = useTransactionsFilters();
    // const { fromDate, toDate } = filters;
    const { fromDate, toDate } = getTimeFrame();
    // const { userData } = useUserDataContext();
    const linkedAccountId = useUserDataStore(state => state.linkedAccountId);

    const { data, isLoading, isError } = useQuery(
        [QueryKeys.FETCH_BALANCE, fromDate, toDate, linkedAccountId],
        () => fetchMonthlyBalance(fromDate, toDate, linkedAccountId)
    );
    let income = 0, outcomes = 0, balance = 0;
    if (!isLoading) {
        income = data?.income || 0;
        outcomes = data?.outcome || 0;
        balance = income - (outcomes * -1);
    }
    return { income, outcomes, balance, isLoading, isError };
}