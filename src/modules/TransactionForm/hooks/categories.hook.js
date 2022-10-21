import { useQuery } from "react-query"
import { logArray } from "../../../utils/logger";
import { QueryKeys } from "../../../utils/ReactQuery"
import { fetchCategories } from "../api/categories.api"

export const useFetchCategories = callback => {
    const { data, isLoading } = useQuery(QueryKeys.FETCH_CATEGOIRES, fetchCategories, {
        refetchOnWindowFocus: false,
        onSuccess: callback
    });
    let categories = data ?? [];
    logArray(categories);
    return { categories, isLoading };
};