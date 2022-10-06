import { useContext } from "react";
import { createContext, useState } from "react";

export class TabState {
    static NOT_SELECTED = new TabState(0);
    static DELETE = new TabState(1);
    static CONFIRM_DELETE = new TabState(2);
    constructor(id) {
        this.id = id;
    }
}; 

const TransactionActionButtonCtx = createContext(null);

export const TransactionActionButtonProvider = ({ children }) => {
    const [tabState, setTabState] = useState(TabState.NOT_SELECTED);
    const tabApi = {
        setNotSelected: () => setTabState(TabState.NOT_SELECTED),
        setDelete: () => setTabState(TabState.DELETE),
        setConfirm: () => setTabState(TabState.CONFIRM_DELETE),
    };

    return (
        <TransactionActionButtonCtx.Provider value={{tabState, ...tabApi}}>
            {children}
        </TransactionActionButtonCtx.Provider>
    );
};

export const useTabState = () => {
    const ctx = useContext(TransactionActionButtonCtx);
    if (!ctx)
        throw new Error("useTabState must be used within the TransactionActionButtonProvider");
    return ctx;
};