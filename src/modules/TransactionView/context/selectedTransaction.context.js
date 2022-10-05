import { useContext, useState } from "react";
import { createContext } from "react";

const SelectedTransactionCtx = createContext(null);

export const SelectedTransactionProvider = ({ children }) => {
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const setTr = trId => {
        setSelectedTransaction(trId === selectedTransaction ? null : trId);
    }
    return (
        <SelectedTransactionCtx.Provider value={{ 
            selectedTransaction,
            setTr
        }}>
            {children}
        </SelectedTransactionCtx.Provider>
    )
};

export const useSelectedTransaction = () => {
    const ctx = useContext(SelectedTransactionCtx);
    if (!ctx)
        throw new Error("useSelectedTransaction must be used within the SelectedTransactionProvider");
    return ctx;
};

