import { apiRoute } from "../../../config";

export const fetchMonthlyBalance = async (fromDateISOString, toDateISOString) => {
    if (!fromDateISOString || !toDateISOString)
        return;
    const queryParams = `?fromDate=${fromDateISOString}&toDate=${toDateISOString}`
    const requestOptions = {
        method: "GET",
        headers: { 
            'Authorization': `Bearer ${localStorage.getItem("apiAccessToken")}`
        }
    };
    const response = await fetch(apiRoute + "/transactions/balance" + queryParams, requestOptions);
    if (response.status === 500)
        throw new Error("Server error");
    return await response.json();
}

export const getTotalByCategory = async (fromDateISOString, toDateISOString) => {
    if (!fromDateISOString || !toDateISOString)
        return;
    const queryParams = `?fromDate=${fromDateISOString}&toDate=${toDateISOString}`
    const requestOptions = {
        method: "GET",
        headers: { 
            'Authorization': `Bearer ${localStorage.getItem("apiAccessToken")}`
        }
    };
    const response = await fetch(apiRoute + "/transactions/category" + queryParams, requestOptions);
    if (response.status === 500)
        throw new Error("Server error");
    return await response.json();
}

export const getYearlyTotalByMonth = async (fromDateISOString, toDateISOString) => {
    if (!fromDateISOString || !toDateISOString)
        return;
    const requestOptions = {
        method: "GET",
        headers: { 
            'Authorization': `Bearer ${localStorage.getItem("apiAccessToken")}`
        }
    };
    const queryParams = `?fromDate=${fromDateISOString}&toDate=${toDateISOString}`
    const response = await fetch(apiRoute + "/transactions/yearly" + queryParams, requestOptions);
    if (response.status === 500)
        throw new Error("Server error");
    return await response.json();
}