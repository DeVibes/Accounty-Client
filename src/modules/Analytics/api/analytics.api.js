import { serverApiClient } from '../../../utils/API/ApiClient';

const onError = (msg) => {
    throw new Error(msg);
};

export const fetchMonthlyBalance = async (
    fromDateISOString,
    toDateISOString,
    linkedAccountId
) => {
    if (!fromDateISOString || !toDateISOString || !linkedAccountId) return;
    const queryParams = `?fromDate=${fromDateISOString}&toDate=${toDateISOString}`;
    const url = `/transactions/${linkedAccountId}/balance${queryParams}`;
    const data = await serverApiClient.get(url, onError);
    return JSON.parse(data);
};

export const getTotalByCategory = async (
    fromDateISOString,
    toDateISOString,
    linkedAccountId
) => {
    if (!fromDateISOString || !toDateISOString || !linkedAccountId) return;
    const queryParams = `?fromDate=${fromDateISOString}&toDate=${toDateISOString}`;
    const url = `/transactions/${linkedAccountId}/category${queryParams}`;
    const data = await serverApiClient.get(url, onError);
    return data;
};

export const getYearlyTotalByMonth = async (
    fromDateISOString,
    toDateISOString,
    linkedAccountId
) => {
    if (!fromDateISOString || !toDateISOString || !linkedAccountId) return;
    const queryParams = `?fromDate=${fromDateISOString}&toDate=${toDateISOString}`;
    const url = `/transactions/${linkedAccountId}/yearly${queryParams}`;
    const data = await serverApiClient.get(url, onError);
    return data;
};
