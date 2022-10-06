import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteTransactionRequest, fetchTransactionsRequest, postTransactionRequest } from '../api/transactions.api';
import { log, logArray } from '../../../utils/logger';
import { QueryKeys, QueryStatus } from '../../../utils/ReactQuery';
import { calculateDailySpent, sortTransactionsByDate } from '../services/transactions.service';

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
    const queryClient = useQueryClient();
    const { mutateAsync, isLoading, isSuccess } = useMutation(postTransactionRequest, {
        onSuccess: callback
    });
    const postTransaction = async newTransaction => {
		await mutateAsync(newTransaction);
        queryClient.invalidateQueries(QueryKeys.FETCH_TRANSACTIONS);
    };
    return { postTransaction, isLoading, isSuccess };
}

export const useDeleteTransaction = callback => {
    const queryClient = useQueryClient();
    const { mutateAsync, isLoading } = useMutation(deleteTransactionRequest, {
        onSuccess: callback
    });
    const deleteTransaction = async transactionId => {
        await mutateAsync(transactionId);
        queryClient.invalidateQueries(QueryKeys.FETCH_TRANSACTIONS);
    };
    return { deleteTransaction, isLoading };
};

const manipulateTransactions = transactions => {
    const sortedTransactions = sortTransactionsByDate(transactions, true);
    const calculatedTransactions = calculateDailySpent(sortedTransactions);
    return calculatedTransactions;
}