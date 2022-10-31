import { BagIcon, BodySoulIcon, CarIcon, FoodIcon, HouseIcon, IncomeIcon, UnknownIcon } from "./icons";

export const CategoriesMap = new Map();
export class Category {
    static Unknown = new Category("Unknown", UnknownIcon);
    static Shopping = new Category("Shopping", BagIcon, "#af1b1b");
    static Car = new Category("Car", CarIcon, "#48240f");
    static EatOut = new Category("EatOut", FoodIcon, "#efff00");
    static House = new Category("House", HouseIcon, "#9d00ff");
    static BodySoul = new Category("Body & Soul", BodySoulIcon, "#3d9b17");
    static Income = new Category("Income", IncomeIcon, "#0db5c7");
    constructor(name, icon, color) {
        this.name = name;
        this.icon = icon;
        this.color = color;
    }
}

for (const prop in Category) {
    const category = Category[prop];
    if (category === Category.Unknown)
        continue;
    CategoriesMap.set(category.name, category);
}