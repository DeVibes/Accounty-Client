import { useContext } from "react";
import { createContext, useState } from "react";

const TransactionsFiltersCtx = createContext(null);

export const TransactionsFilterProvider = ({ children }) => {
    const [filters, setFilters] = useState({});
    const setDateRange = (fromDate, toDate) => {
        setFilters({
            ...filters,
            fromDate,
            toDate
        });
    };
    const api ={
        setDateRange
    };

    return (
        <TransactionsFiltersCtx.Provider value={{ filters, ...api }}>
            {children}
        </TransactionsFiltersCtx.Provider>
    )
};

export const useTransactionsFilters = () => {
    const ctx = useContext(TransactionsFiltersCtx);
    if (!ctx)
        throw new Error("useSelectedTransaction must be used within the TransactionsFilterProvider");
    return ctx;
}