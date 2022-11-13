import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteTransactionRequest, fetchTransactionsRequest, patchTransactionRequest, postTransactionRequest } from '../api/transactions.api';
import { logArray } from '../../../utils/logger';
import { QueryKeys } from '../../../utils/ReactQuery';
import { manipulateTransactions } from '../services/transactions.service';

export const useFetchTransactions = () => {
    const { data, isLoading, isSuccess } = useQuery(QueryKeys.FETCH_TRANSACTIONS, 
        fetchTransactionsRequest,
        {
            refetchOnWindowFocus: false,
        }
    );
    let transactions = data ?? [];
    if (isSuccess && transactions.length !== 0) {

        transactions = manipulateTransactions(transactions);
    }
    logArray(transactions)
    return { transactions, isLoading };
};

export const usePostTransaction = callback => {
    const queryClient = useQueryClient();
    const { mutateAsync, isLoading, isSuccess } = useMutation(postTransactionRequest, {
        onSuccess: () => {
            callback();
            queryClient.invalidateQueries(QueryKeys.FETCH_TRANSACTIONS);
        }
    });
    const postTransaction = async newTransaction => {
		await mutateAsync(newTransaction);
    };
    return { postTransaction, isLoading, isSuccess };
}

export const useDeleteTransaction = () => {
    const queryClient = useQueryClient();
    const { mutateAsync, isLoading, isSuccess } = useMutation(deleteTransactionRequest, {
        onSuccess: () => {
            queryClient.invalidateQueries(QueryKeys.FETCH_TRANSACTIONS);
        }
    });
    const deleteTransaction = async transactionId => {
        await mutateAsync(transactionId);
    };
    return { deleteTransaction, isLoading, isSuccess };
};

export const usePatchTransaction = () => {
    const queryClient = useQueryClient();
    const { mutateAsync, isLoading } = useMutation(patchTransactionRequest, {
        onSuccess: () => {
            queryClient.invalidateQueries(QueryKeys.FETCH_TRANSACTIONS);
        }
    })
    const patchTransaction = async (trId, seen) => {
        await mutateAsync({ trId, seen });
    };
    return { patchTransaction, isLoading }
};
