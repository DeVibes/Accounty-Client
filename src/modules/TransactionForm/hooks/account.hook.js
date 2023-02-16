import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useFeedbackStore } from '../../../shared/state/feedbackStore';
import { useUserDataStore } from '../../../shared/state/userDataStore';
import { QueryKeys } from '../../../utils/ReactQuery';
import {
    fetchAccountData,
    deletePaymentTypeApi,
    addPaymentTypeApi,
} from '../api/account.api';

export const useAccountHook = (callback) => {
    const linkedAccountId = useUserDataStore((state) => state.linkedAccountId);
    const { data, isLoading, isError } = useQuery(
        [QueryKeys.FETCH_ACCOUNT_DATA, linkedAccountId],
        () => fetchAccountData(linkedAccountId),
        {
            refetchOnWindowFocus: false,
            onSuccess: callback,
        }
    );
    return { data, isLoading, isError };
};

export const useDeletePaymentType = () => {
    const openFeedback = useFeedbackStore((state) => state.openFeedback);
    const linkedAccountId = useUserDataStore((state) => state.linkedAccountId);
    const queryClient = useQueryClient();
    const { mutateAsync, isLoading, isSuccess } = useMutation(
        deletePaymentTypeApi,
        {
            onSuccess: () => {
                queryClient.invalidateQueries(QueryKeys.FETCH_ACCOUNT_DATA);
            },
            onError: (error) => {
                openFeedback(error.message);
            },
        }
    );
    const deletePaymentType = async (paymentType) => {
        await mutateAsync({
            linkedAccountId,
            paymentType,
        });
    };
    return { deletePaymentType, isLoading, isSuccess };
};

export const useAddPaymentType = () => {
    const openFeedback = useFeedbackStore((state) => state.openFeedback);
    const linkedAccountId = useUserDataStore((state) => state.linkedAccountId);
    const queryClient = useQueryClient();
    const { mutateAsync, isLoading, isSuccess } = useMutation(
        addPaymentTypeApi,
        {
            onSuccess: () => {
                queryClient.invalidateQueries(QueryKeys.FETCH_ACCOUNT_DATA);
            },
            onError: (error) => {
                openFeedback(error.message);
            },
        }
    );
    const addPaymentType = async (paymentType) => {
        await mutateAsync({
            linkedAccountId,
            paymentType,
        });
    };
    return { addPaymentType, isLoading, isSuccess };
};
