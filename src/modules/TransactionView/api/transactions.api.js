import { apiRoute } from "../../../config";
import { log } from "../../../utils/logger";

export const fetchTransactionsRequest = async filters => {
    const { startTimeFrame, endTimeFrame } = filters;
    let queryString = "?";
    if (startTimeFrame != null && endTimeFrame != null ) {
        queryString += `startDate=${startTimeFrame}&endDate=${endTimeFrame}`;
    }
    const response = await fetch(apiRoute+ "/transactions" + queryString);
    const transactions = await response.json();
    return transactions;
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