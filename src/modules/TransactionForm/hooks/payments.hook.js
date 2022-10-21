import { useQuery } from "react-query";
import { logArray } from "../../../utils/logger";
import { QueryKeys } from "../../../utils/ReactQuery";
import { fetchPaymentTypes } from "../api/payments.api";

export const useFetchPaymentTypes = () => {
    const { data, isLoading } = useQuery(QueryKeys.FETCH_PAYMENT_TYPES, fetchPaymentTypes, {
        refetchOnWindowFocus: false
    });
    let paymentTypes = data ?? [];
    logArray(paymentTypes);
    return { paymentTypes, isLoading };
};