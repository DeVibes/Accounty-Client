import { useQuery } from "react-query";
import { logArray } from "../../../utils/logger";
import { QueryKeys } from "../../../utils/ReactQuery";
import { fetchPaymentTypes } from "../api/payments.api";

export const useFetchPaymentTypes = () => {
    const { data, isLoading, isError, isSuccess } = useQuery(QueryKeys.FETCH_PAYMENT_TYPES, fetchPaymentTypes, {
        refetchOnWindowFocus: false
    });
    let paymentTypes = data ?? [];
    logArray(paymentTypes);
    const payStatus = {
        isLoading, 
        isError,
        isSuccess
    }
    return { paymentTypes, payStatus };
};