import { Category } from "../../../utils/categories";

export const calculateTotalSpentAndIncome = transactions => {
    let total = 0, income = 0;
    if (!transactions)
        return { total, income };
    transactions.forEach(tr => {
        if (tr.category.name !== Category.Income.name)
            total -= tr.price;
        else
            income += tr.price; 
    });
    return { total, income };
};