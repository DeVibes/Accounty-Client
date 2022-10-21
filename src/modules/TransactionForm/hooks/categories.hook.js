import { useQuery } from "react-query"
import { logArray } from "../../../utils/logger";
import { QueryKeys } from "../../../utils/ReactQuery"
import { fetchCategories } from "../api/categories.api"

export const useFetchCategories = () => {
    const { data, isLoading } = useQuery(QueryKeys.FETCH_CATEGOIRES, fetchCategories, {
        refetchOnWindowFocus: false,
    });
    let categories = data ?? [];
    logArray(categories);
    return { categories, isLoading };
};