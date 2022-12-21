import { apiRoute } from "../../../config";

export const getTotalByCategory = async (fromDateISOString, toDateISOString) => {
    if (!fromDateISOString || !toDateISOString)
        return;
    const queryParams = `?fromDate=${fromDateISOString}&toDate=${toDateISOString}`
    const response = await fetch(apiRoute + "/transactions/category" + queryParams);
    if (response.status === 500)
        throw new Error("Server error");
    return await response.json();
}