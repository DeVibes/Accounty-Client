import { HiOutlineShoppingBag as BagIcon } from "react-icons/hi";
import { AiOutlineCar as CarIcon } from "react-icons/ai";

export const CategoriesMap = new Map();
export const CategoriesArray = [];
class Category {
    static Shopping = new Category(1, "Shopping", BagIcon);
    static Car = new Category(2, "Car", CarIcon);
    constructor(id, name, icon) {
        this.id = id;
        this.name = name;
        this.icon = icon;
    }
}

for (const prop in Category) {
    const category = Category[prop];
    CategoriesMap.set(category.id, category);
    CategoriesArray.push(category);
}