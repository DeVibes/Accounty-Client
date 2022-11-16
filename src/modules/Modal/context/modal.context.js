import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { ModalContent } from "../Modal";

const ModalCtx = createContext(null);

export const ModalProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(ModalContent.NONE)
    const api = {
        openAddTransaction: () => {
            setModalContent(ModalContent.ADD_TRANSACTION);
            setIsModalOpen(true);
        },
        openFilterTransactions: () => {
            setModalContent(ModalContent.FILTER);
            setIsModalOpen(true);
        },
        closeModal: () => {
            setModalContent(ModalContent.NONE);
            setIsModalOpen(false);
        }
        
    };

    return (
        <ModalCtx.Provider value={{ isModalOpen, modalContent, ...api }}>
            {children}
        </ModalCtx.Provider>
    );
};

export const useModalContext = () => {
    const ctx = useContext(ModalCtx);
    if (!ctx)
        throw new Error("usePopupContext must be used within the PopupProvider");
    return ctx;
};