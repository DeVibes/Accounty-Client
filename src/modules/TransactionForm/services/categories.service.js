import { CategoriesMap } from "../../../utils/categories"
import { UnknownCategoryIcon } from "../../../utils/icons";

export const mapIconsToCategories = categoriesArray => {
    const arr = categoriesArray.map(category => {
        const icon = CategoriesMap.get(category.name);
        return {
            ...category,
            icon: icon ?? UnknownCategoryIcon  
        };
    });
    return arr;
};