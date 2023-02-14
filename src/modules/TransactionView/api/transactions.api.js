import { serverApiClient } from '../../../utils/API/ApiClient';
import { log, logError } from '../../../utils/logger';

export const fetchTransactionsRequest = async (filters, page) => {
    const onError = (msg) => {
        throw new Error(`Error getting transactions`);
    };
    const { fromDate, toDate, linkedAccountId } = filters;
    let queryString = `?page=${page}`;
    if (fromDate != null && toDate != null) {
        queryString += `&fromDate=${fromDate}&toDate=${toDate}`;
    }
    const url = `/transactions/${linkedAccountId}/all${queryString}`;
    const data = await serverApiClient.get(url, onError);
    return data;
};

export const postTransactionRequest = async ({
    newTransaction,
    linkedAccountId,
}) => {
    const onError = (msg) => {
        throw new Error(`Error creating transaction`);
    };
    const url = `/transactions/${linkedAccountId}`;
    const data = await serverApiClient.post(url, newTransaction, onError);
    log(`Created transaction:`);
    log(data);
};

export const patchTransactionRequest = async ({
    linkedAccountId,
    transactionId,
    updated,
}) => {
    const onError = (msg) => {
        throw new Error(`Error updating transaction`);
    };

    const url = `/transactions/${linkedAccountId}/${transactionId}`;
    const data = await serverApiClient.patch(url, updated, onError);
    log(`Updated transaction:`);
    log(data);
};

export const deleteTransactionRequest = async (transactionId) => {
    const onError = (msg) => {
        throw new Error(`Error deleting transaction`);
    };
    const url = `/transactions/${transactionId}`;
    await serverApiClient.delete(url, onError);
    log(`deleted transaction:`);
    log(transactionId);
};
