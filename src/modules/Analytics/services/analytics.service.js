import { Category } from "../../../utils/categories";
const { DateTime } = require("luxon");

export const mapDataForRechartPie = data => 
    data.map(({ category: name, total: value }) => { 
        value = +value;
        return { name, value }
    });

export const sortYearlyTotal = data => 
    data.sort((a, b) => {
        if (a.year === b.year)
            return a.month - b.month;
        return a.year - b.year;
    });

export const mapDataForRechartCol = data => 
    data.map(({ year, month, total }) => {
        return {
            total: Math.abs(total),
            date: `${month}/${year}`
    }});

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
        // current day is between userCycle (10) and 28 / 30 / 31
        // fromDate should be 11 of the current month start day
        // toDate should be 10 of the next month end day (increase the year if its December)
        fromDate = DateTime.local(currentYear, currentMonth, userCycle + 1).startOf('day').toUTC().toISO();   //'YYYY-MM-DDTHH:MM:SS.MSZ'
        toDate = DateTime.local(currentMonth === 12 ? currentYear + 1 : currentYear, 
            currentMonth === 12 ? 1 : currentMonth + 1, userCycle).endOf('day').toUTC().toISO();
    }
    else {
        // current day is between 1 and userCycle (10)
        // fromDate should be 11 of the previous month start day (subtract the year if its January)
        // toDate should be 10 of the current month end day
        fromDate = DateTime.local(currentMonth === 1 ? currentYear - 1 : currentYear, 
            currentMonth === 1 ? 12 : currentMonth - 1, userCycle + 1).startOf('day').toUTC().toISO();
        toDate = DateTime.local(currentYear, currentMonth, userCycle).endOf('day').toUTC().toISO();
    }
    return { fromDate, toDate }
};

export const getYearTimeFrame = () => {
    const { day: currentDay, month: currentMonth, year: currentYear } = DateTime.now();
    const userCycle = 10;
    let fromDate, toDate;
    //TODO 10 should be user's choice
    if (currentDay > userCycle) {
        toDate = DateTime.local(currentMonth === 12 ? currentYear + 1 : currentYear, 
            currentMonth === 12 ? 1 : currentMonth + 1, userCycle);
        fromDate = toDate.minus({ years: 1 }).plus({ days: 1 }).toUTC().toISO();
        toDate = toDate.endOf('day').toUTC().toISO();
    }
    else {
        toDate = DateTime.local(currentYear, currentMonth, userCycle);
        fromDate = toDate.minus({ years: 1 }).plus({ days: 1 }).toUTC().toISO();
        toDate = toDate.startOf('day').toUTC().toISO();
    }
    return { fromDate, toDate }
};