import { DateTime } from "luxon";
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

export const getTimeFrame = () => {
    const { day: currentDay, month: currentMonth, year: currentYear } = DateTime.now();
    const userCycle = 10;
    let fromDate, toDate;
    //TODO 10 should be user's choice
    if (currentDay > userCycle) {
        fromDate = DateTime.local(currentYear, currentMonth, userCycle + 1).startOf('day').toUTC().toISO();   //'YYYY-MM-DDTHH:MM:SS.MSZ'
        toDate = DateTime.local(currentMonth === 12 ? currentYear + 1 : currentYear, 
            currentMonth + 1, userCycle).endOf('day').toUTC().toISO();
    }
    else {
        fromDate = DateTime.local(currentMonth === 1 ? currentYear - 1 : currentYear, 
            currentMonth - 1, userCycle + 1).endOf('day').toUTC().toISO();
        toDate = DateTime.local(currentYear, currentMonth, userCycle).startOf('day').toUTC().toISO();
    }
    return { fromDate, toDate }
};