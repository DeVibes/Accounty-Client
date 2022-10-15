import { apiRoute } from "../../../config";
import { log } from "../../../utils/logger";

export const fetchTransactionsRequest = async () => {
    const response = await fetch(apiRoute+ "/transactions");
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

export const deleteTransactionRequest = async transactionId => {
    const requestOptions = {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' }
    };
    const response = await fetch(apiRoute+ `/transactions/${transactionId}`, requestOptions);
};