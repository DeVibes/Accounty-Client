import { BagIcon, BodySoulIcon, CarIcon, FoodIcon, HouseIcon, IncomeIcon, UnknownIcon } from "./icons";

export const CategoriesMap = new Map();
export class Category {
    static Unknown = new Category("Unknown", UnknownIcon);
    static Shopping = new Category("Shopping", BagIcon);
    static Car = new Category("Car", CarIcon);
    static EatOut = new Category("EatOut", FoodIcon);
    static House = new Category("House", HouseIcon);
    static BodySoul = new Category("Body & Soul", BodySoulIcon);
    static Income = new Category("Income", IncomeIcon);
    constructor(name, icon) {
        this.name = name;
        this.icon = icon;
    }
}

for (const prop in Category) {
    const category = Category[prop];
    if (category === Category.Unknown)
        continue;
    CategoriesMap.set(category.name, category);
}