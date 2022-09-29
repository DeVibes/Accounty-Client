import { useMutation, useQuery } from 'react-query';
import { deleteTransactionRequest, fetchTransactionsRequest, postTransactionRequest } from '../API/transactions.api';
import { log, logArray } from '../logger';
import { QueryKeys, QueryStatus } from '../reactQuery';
import { calculateDailySpent, sortTransactionsByDate } from '../Services/transactions.service';

export const useFetchTransactions = () => {
    const { data, status, refetch } = useQuery(QueryKeys.FETCH_TRANSACTIONS, 
        fetchTransactionsRequest,
        {
            refetchOnWindowFocus: false
        }
    );
    logArray(data);
    let transactions = data ?? [];
    if (status === QueryStatus.SUCCESS && transactions.length != 0)
        transactions = manipulateTransactions(transactions);
    return { transactions, status, refetch };
};

export const usePostTransaction = callback => {
    const { mutateAsync, isLoading } = useMutation(postTransactionRequest, {
        onSuccess: callback
    });
    const postTransaction = async newTransaction => {
		await mutateAsync(newTransaction);
    };
    return { postTransaction, isLoading };
}

export const useDeleteTransaction = callback => {
    const { mutateAsync, isLoading } = useMutation(deleteTransactionRequest, {
        onSuccess: callback
    });
    const deleteTransaction = async transactionId => {
        await mutateAsync(transactionId);
    };
    return { deleteTransaction, isLoading };
};

const manipulateTransactions = transactions => {
    const sortedTransactions = sortTransactionsByDate(transactions, true);
    const calculatedTransactions = calculateDailySpent(sortedTransactions);
    return calculatedTransactions;
}