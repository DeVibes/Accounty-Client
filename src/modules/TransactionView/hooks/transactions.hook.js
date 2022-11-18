import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteTransactionRequest, fetchTransactionsRequest, patchTransactionRequest, postTransactionRequest } from '../api/transactions.api';
import { logArray } from '../../../utils/logger';
import { QueryKeys } from '../../../utils/ReactQuery';
import { manipulateTransactions } from '../services/transactions.service';
import { useTransactionsFilters } from '../context/transactionsFilter.context';

export const useFetchTransactions2 = () => {
    const { filters } = useTransactionsFilters();
    const { data, isLoading, isError, isSuccess, isPreviousData } = useQuery([QueryKeys.FETCH_TRANSACTIONS, filters],
        () => fetchTransactionsRequest(filters), {
            keepPreviousData: true
        }
    );
    let transactions = data?.transactions ?? [];
    if (isSuccess && transactions.length !== 0) {

        transactions = manipulateTransactions(transactions);
    }
    logArray(transactions)
    return { transactions, isLoading, isError, isPreviousData };
};

export const useFetchTransactions = () => {
    const { filters } = useTransactionsFilters();
    const { data, 
        isLoading, 
        isSuccess, 
        isError, 
        hasNextPage, 
        fetchNextPage, 
        isFetchingNextPage 
    } = useInfiniteQuery(
        [QueryKeys.FETCH_TRANSACTIONS, filters],
        async ({ queryKey, pageParam = 0 }) => {
            const { fromDate, toDate } = queryKey[1];
            return await fetchTransactionsRequest({ fromDate, toDate }, pageParam);
        },
        {
            getNextPageParam: (lastPage, allPages) => {
                const nextPage = lastPage.page + 1;
                console.log("Next page is " + nextPage);
                return nextPage * 10 <= lastPage.itemsCount ? nextPage : undefined;
            }
        }
    );
    const pagedTransactions = data?.pages;
    if (isSuccess && data.pages.length !== 0) {
        pagedTransactions.forEach(page => {
            page.transactions = manipulateTransactions(page.transactions)
        })
    }
    logArray(pagedTransactions)
    return { pagedTransactions, isLoading, isError, hasNextPage, fetchNextPage, isFetchingNextPage };
}

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
