import { apiRoute } from "../../../config"

export const fetchCategories = async () => {
    const requestOptions = {
        method: "GET",
        headers: { 
            'Authorization': `Bearer ${localStorage.getItem("apiAccessToken")}`
        }
    };
    const response = await fetch(apiRoute+ "/categories", requestOptions);
    const categories = await response.json();
    return categories;
}