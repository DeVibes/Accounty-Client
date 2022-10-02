import { useContext, useState } from "react";
import { createContext } from "react";

const TransactionContext = createContext(null);

export const TransactionProvider = ({ children }) => {
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [fabState, setFabState] = useState(FabState.NOT_SELECTED);
    const states = {
        selectedTransaction,
        fabState
    };
    const setters = {
        setSelectedTransaction,
        setFabState
    };
    return (
        <TransactionContext.Provider value={{ states, setters }}>
            { children }
        </TransactionContext.Provider>
    )
};

export const useSelectedTransaction = () => {
    const ctx = useContext(TransactionContext);
    return ctx;
};

const FabState = {
    NOT_SELECTED: 0,
    DELETE: 1,
    CONFIRM_DELETE: 2,
    
};

Object.freeze(FabState);

export { FabState };
