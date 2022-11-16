import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteTransactionRequest, fetchTransactionsRequest, patchTransactionRequest, postTransactionRequest } from '../api/transactions.api';
import { logArray } from '../../../utils/logger';
import { QueryKeys } from '../../../utils/ReactQuery';
import { manipulateTransactions } from '../services/transactions.service';
import { useTransactionsFilters } from '../context/transactionsFilter.context';
import { getTimeFrame } from '../../BalanceView/services/transactions.service';

export const useFetchTransactions = () => {
    const { filters } = useTransactionsFilters();
    const { data, isLoading, isError, isSuccess } = useQuery([QueryKeys.FETCH_TRANSACTIONS, filters],
        () => fetchTransactionsRequest(filters)
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
    const { mutateAsync, isLoading, isSuccess, reset } = useMutation(postTransactionRequest, {
        onSuccess: () => {
            callback();
            queryClient.invalidateQueries(QueryKeys.FETCH_TRANSACTIONS);
        }
    });
    const postTransaction = async newTransaction => {
		await mutateAsync(newTransaction);
    };
    return { postTransaction, isLoading, isSuccess, reset };
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
