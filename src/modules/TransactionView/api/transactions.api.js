import { apiRoute } from "../../../config";

export const fetchTransactionsRequest = async (filters, page) => {
    const { fromDate, toDate } = filters;
    let queryString = `?page=${page}`;
    if (fromDate != null && toDate != null) {
        queryString += `&fromDate=${fromDate}&toDate=${toDate}`;
    }
    const response = await fetch(apiRoute+ "/transactions" + queryString);
    return await response.json();
};

export const postTransactionRequest = async transaction => {
    const requestOptions = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(transaction)
    };
    const response = await fetch(apiRoute+ "/transactions", requestOptions);
};

export const patchTransactionRequest = async ({trId, seen})  => {
    const requestOptions = {
        method: "PATCH",
        headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(apiRoute+ `/transactions/${trId}?seen=${seen}`, requestOptions);
};

export const deleteTransactionRequest = async transactionId => {
    const requestOptions = {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' }
    };
    const response = await fetch(apiRoute+ `/transactions/${transactionId}`, requestOptions);
};