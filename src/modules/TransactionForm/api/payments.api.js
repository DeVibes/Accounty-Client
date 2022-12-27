import { apiRoute } from "../../../config"

export const fetchPaymentTypes = async () => {
    const requestOptions = {
        method: "GET",
        headers: { 
            'Authorization': `Bearer ${localStorage.getItem("apiAccessToken")}`
        }
    };
    const response = await fetch(apiRoute+ "/payments", requestOptions);
    const paymentTypes = await response.json();
    return paymentTypes;
}