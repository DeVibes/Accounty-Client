import { createContext, useContext, useState } from "react"

const PopupCtx = createContext(null);

export const PopupProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const api = {
        openPopup: () => setIsOpen(true),
        closePopup: () => setIsOpen(false)
    };

    return (
        <PopupCtx.Provider value={{isOpen, ...api}}>
            {children}
        </PopupCtx.Provider>
    );
};

export const usePopupContext = () => {
    const ctx = useContext(PopupCtx);
    if (!ctx)
        throw new Error("usePopupContext must be used within the PopupProvider");
    return ctx;
}