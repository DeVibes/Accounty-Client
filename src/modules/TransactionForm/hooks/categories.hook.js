import { useQuery } from "react-query"
import { logArray } from "../../../utils/logger";
import { QueryKeys, QueryStatus } from "../../../utils/ReactQuery"
import { fetchCategories } from "../api/categories.api"
import { mapIconsToCategories } from "../services/categories.service";

export const useFetchCategories = () => {
    const { data, isLoading, isError, isSuccess } = useQuery(QueryKeys.FETCH_CATEGOIRES, fetchCategories, {
        refetchOnWindowFocus: false,
        // onSuccess: mapIconsToCategories
    });
    let categories = data ?? [];
    logArray(categories);
    const catStatus = {
        isLoading, 
        isError,
        isSuccess
    }
    return { categories, catStatus };
};