import { HiOutlineShoppingBag as BagIcon } from "react-icons/hi";
import { AiOutlineCar as CarIcon } from "react-icons/ai";
import { BsFillQuestionSquareFill as UnknownIcon } from "react-icons/bs"; 

export const CategoriesMap = new Map();
export const CategoriesArray = [];
export class Category {
    static Shopping = new Category(1, "Shopping", BagIcon);
    static Car = new Category(2, "Car", CarIcon);
    static Unknown = new Category(3, "Unkown", UnknownIcon);
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