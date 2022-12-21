import { useQuery } from "react-query";
import { QueryKeys } from "../../../utils/ReactQuery";
import { getTimeFrame } from "../../BalanceView/services/transactions.service";
import { getTotalByCategory } from "../api/totalByCategory.api";
import { mapDataForRechartPie } from "../services/chartData.service";

export const useFetchTotalByCategory = () => {
    const { fromDate, toDate } = getTimeFrame();
    let { data, isLoading, isError } = useQuery(
        [QueryKeys.FETCH_TOTAL_BY_CATEGORY, fromDate, toDate],
        () => getTotalByCategory(fromDate, toDate)
    );
    if (!isError && !isLoading)
        data = mapDataForRechartPie(data);
    return { data, isLoading };
}