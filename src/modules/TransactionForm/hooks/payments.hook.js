import { useQuery } from "react-query";
import { logArray } from "../../../utils/logger";
import { QueryKeys } from "../../../utils/ReactQuery";
import { fetchPaymentTypes } from "../api/payments.api";

export const useFetchPaymentTypes = callback => {
    const { data, isLoading, isError } = useQuery(QueryKeys.FETCH_PAYMENT_TYPES, fetchPaymentTypes, {
        refetchOnWindowFocus: false,
        onSuccess: callback
    });
    let paymentTypes = data ?? [];
    logArray(paymentTypes);
    return { paymentTypes, isLoading, isError };
};