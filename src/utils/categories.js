import {
    BagIcon,
    BillIcon,
    BodySoulIcon,
    CarIcon,
    FoodIcon,
    GroceryIcon,
    HouseIcon,
    IncomeIcon,
    PresentIcon,
    TransportIcon,
    UnknownIcon,
} from './icons';

export const CategoriesMap = new Map();
export class Category {
    static Unknown = new Category('Unknown', UnknownIcon);
    static Shopping = new Category('Shopping', BagIcon, '#fb4934');
    static Car = new Category('Car', CarIcon, '#0088FE');
    static EatOut = new Category('EatOut', FoodIcon, '#fabd2f');
    static House = new Category('House', HouseIcon, '#9d00ff');
    static BodySoul = new Category('Body&Soul', BodySoulIcon, '#d3869b');
    static Grocery = new Category('Grocery', GroceryIcon, '#b8bb26');
    static Income = new Category('Income', IncomeIcon, '#0db5c7');
    static Transport = new Category('Transport', TransportIcon, '#BE8D3C');
    static Bill = new Category('Bill', BillIcon, '#ebdbb2');
    static Gift = new Category('Gift', PresentIcon, '#83a598');
    constructor(name, icon, color) {
        this.name = name;
        this.icon = icon;
        this.color = color;
    }
}

for (const prop in Category) {
    const category = Category[prop];
    if (category === Category.Unknown) continue;
    CategoriesMap.set(category.name, category);
}
