import { useInfiniteQuery, useMutation, useQueryClient } from 'react-query';
import {
    deleteTransactionRequest,
    fetchTransactionsRequest,
    patchTransactionRequest,
    postTransactionRequest,
} from '../api/transactions.api';
import { logArray } from '../../../utils/logger';
import { QueryKeys } from '../../../utils/ReactQuery';
import { manipulateTransactions } from '../services/transactions.service';
import { useUserDataStore } from '../../../shared/state/userDataStore';
import { getTimeFrame } from '../../Analytics/services/analytics.service';
import { useFiltersStore } from '../../../shared/state/filtersStore';
import { useFeedbackStore } from '../../../shared/state/feedbackStore';

export const useFetchTransactions = (isMonthly) => {
    let { fromDate, toDate } = useFiltersStore((state) => ({
        fromDate: state.fromDate,
        toDate: state.toDate,
    }));
    if (isMonthly) {
        const dates = getTimeFrame();
        fromDate = dates.fromDate;
        toDate = dates.toDate;
    }

    const linkedAccountId = useUserDataStore((state) => state.linkedAccountId);
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery(
        [QueryKeys.FETCH_TRANSACTIONS, { fromDate, toDate, linkedAccountId }],
        async ({ queryKey, pageParam = 0 }) => {
            const { fromDate, toDate, linkedAccountId } = queryKey[1];
            return await fetchTransactionsRequest(
                { fromDate, toDate, linkedAccountId },
                pageParam
            );
        },
        {
            getNextPageParam: (lastPage, allPages) => {
                const nextPage = lastPage.page + 1;
                console.log('Next page is ' + nextPage);
                return nextPage * 10 <= lastPage.itemsCount
                    ? nextPage
                    : undefined;
            },
        }
    );
    const pagedTransactions = data?.pages;
    if (isSuccess && data.pages.length !== 0) {
        pagedTransactions.forEach((page) => {
            page.transactions = manipulateTransactions(page.transactions);
        });
    }
    logArray(pagedTransactions);
    return {
        pagedTransactions,
        isLoading,
        isError,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
    };
};

export const usePostTransaction = (callback) => {
    const openFeedback = useFeedbackStore((state) => state.openFeedback);
    const { email, linkedAccountId } = useUserDataStore((state) => ({
        email: state.email,
        linkedAccountId: state.linkedAccountId,
    }));
    const queryClient = useQueryClient();
    const { mutateAsync, isLoading, isSuccess, reset } = useMutation(
        postTransactionRequest,
        {
            onSuccess: () => {
                callback();
                queryClient.invalidateQueries(QueryKeys.FETCH_TRANSACTIONS);
                queryClient.invalidateQueries(QueryKeys.FETCH_BALANCE);
            },
            onError: (error) => {
                openFeedback(error.message);
            },
        }
    );
    const postTransaction = async (newTransaction) => {
        newTransaction.linkedUserId = email;
        await mutateAsync({
            newTransaction,
            linkedAccountId,
        });
    };
    return { postTransaction, isLoading, isSuccess, reset };
};

export const useDeleteTransaction = () => {
    const openFeedback = useFeedbackStore((state) => state.openFeedback);
    const queryClient = useQueryClient();
    const { mutateAsync, isLoading, isSuccess } = useMutation(
        deleteTransactionRequest,
        {
            onSuccess: () => {
                queryClient.invalidateQueries(QueryKeys.FETCH_TRANSACTIONS);
                queryClient.invalidateQueries(QueryKeys.FETCH_BALANCE);
            },
            onError: (error) => {
                openFeedback(error.message);
            },
        }
    );
    const deleteTransaction = async (transactionId) => {
        await mutateAsync(transactionId);
    };
    return { deleteTransaction, isLoading, isSuccess };
};

export const usePatchTransaction = () => {
    const openFeedback = useFeedbackStore((state) => state.openFeedback);
    const linkedAccountId = useUserDataStore((state) => state.linkedAccountId);
    const queryClient = useQueryClient();
    const { mutateAsync, isLoading } = useMutation(patchTransactionRequest, {
        onSuccess: () => {
            queryClient.invalidateQueries(QueryKeys.FETCH_TRANSACTIONS);
        },
        onError: (error) => {
            openFeedback(error.message);
        },
    });
    const patchTransaction = async (transactionId, seen) => {
        await mutateAsync({
            linkedAccountId,
            transactionId,
            updated: {
                seen,
            },
        });
    };
    return { patchTransaction, isLoading };
};
