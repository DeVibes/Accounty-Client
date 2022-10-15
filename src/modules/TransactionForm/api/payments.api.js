import { apiRoute } from "../../../config"

export const fetchPaymentTypes = async () => {
    const response = await fetch(apiRoute+ "/payments");
    const paymentTypes = await response.json();
    return paymentTypes;
}