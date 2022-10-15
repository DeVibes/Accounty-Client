import { apiRoute } from "../../../config"

export const fetchCategories = async () => {
    const response = await fetch(apiRoute+ "/categories");
    const categories = await response.json();
    return categories;
}