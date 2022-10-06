import { createContext, useContext, useState } from "react"

const PopupCtx = createContext(null);

export const PopupProvider = ({ children }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
    const api = {
        openPopup: () => setIsPopupOpen(true),
        closePopup: () => setIsPopupOpen(false),
        showFeedback: () => setIsFeedbackOpen(true),
        hideFeedback: () => setIsFeedbackOpen(false),
    };

    return (
        <PopupCtx.Provider value={{isFeedbackOpen, isPopupOpen, ...api}}>
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