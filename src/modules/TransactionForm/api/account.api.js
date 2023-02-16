import { serverApiClient } from '../../../utils/API/ApiClient';

export const fetchAccountData = async (accountId) => {
    try {
        const url = `/accounts/${accountId}`;
        const data = await serverApiClient.get(url);
        return data;
    } catch (error) {}
};

export const deletePaymentTypeApi = async ({
    linkedAccountId,
    paymentType,
}) => {
    const onError = (msg) => {
        throw new Error(`Error deleting payment type`);
    };
    const url = `/accounts/${linkedAccountId}/payments`;
    const body = { name: paymentType };
    await serverApiClient.delete(url, onError, body);
};

export const addPaymentTypeApi = async ({ linkedAccountId, paymentType }) => {
    const onError = (msg) => {
        throw new Error(`Error adding payment type`);
    };
    const url = `/accounts/${linkedAccountId}/payments`;
    const body = { name: paymentType };
    await serverApiClient.post(url, body, onError);
};
