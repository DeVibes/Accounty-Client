import { useQuery } from "react-query";
import { useUserDataStore } from "../../../shared/state/userDataStore";
import { QueryKeys } from "../../../utils/ReactQuery";
import { getYearlyTotalByMonth } from "../api/analytics.api";
import { mapDataForRechartCol, sortYearlyTotal, getYearTimeFrame } from "../services/analytics.service";

export const useFetchYearlyTotalByMonth = () => {
    const { fromDate, toDate } = getYearTimeFrame();
    const linkedAccountId = useUserDataStore(state => state.linkedAccountId);
    let { data, isLoading, isError } = useQuery(
        [QueryKeys.FETCH_YEARLY_TOTAL_BY_MONTH, fromDate, toDate, linkedAccountId],
        () => getYearlyTotalByMonth(fromDate, toDate, linkedAccountId)
    );
    if (!isError && !isLoading) {
        data = sortYearlyTotal(data);
        data = mapDataForRechartCol(data)
    }
    return { data, isLoading, isError };
}