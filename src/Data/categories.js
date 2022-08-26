import { HiOutlineShoppingBag as BagIcon } from "react-icons/hi";
import { AiOutlineCar as CarIcon } from "react-icons/ai";

class Category {
    static Shopping = new Category(1, "Shopping", BagIcon)
    static Car = new Category(2, "Car", CarIcon)
    constructor(id, name, icon) {
        this.id = id;
        this.name = name;
        this.icon = icon;
    }
}

export const CategoriesMap = new Map([
    [Category.Shopping.id, Category.Shopping],
    [Category.Car.id, Category.Car],
]);