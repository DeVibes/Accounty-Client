import { BagIcon, BillIcon, BodySoulIcon, CarIcon, FoodIcon, GroceryIcon, HouseIcon, IncomeIcon, PresentIcon, TransportIcon, UnknownIcon } from "./icons";

export const CategoriesMap = new Map();
export class Category {
    static Unknown = new Category("Unknown", UnknownIcon);
    static Shopping = new Category("Shopping", BagIcon, "#af1b1b");
    static Car = new Category("Car", CarIcon, "#0088FE");
    static EatOut = new Category("EatOut", FoodIcon, "#efff00");
    static House = new Category("House", HouseIcon, "#9d00ff");
    static BodySoul = new Category("Body & Soul", BodySoulIcon, "#3d9b17");
    static Grocery = new Category("Grocery", GroceryIcon, "#FFBB28");
    static Income = new Category("Income", IncomeIcon, "#0db5c7");
    static Transport = new Category("Transaport", TransportIcon, "#BE8D3C");
    static Bill = new Category("Bill", BillIcon, "#BE8D3C");
    static Present = new Category("Present", PresentIcon, "#3229EE");
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