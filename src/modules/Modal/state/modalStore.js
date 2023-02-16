import { create } from 'zustand';
import { ModalContent } from '../Modal';

export const useModalStore = create((set) => ({
    isOpen: false,
    modalContent: ModalContent.NONE,
    openAddTransaction: () =>
        set((state) => ({
            ...state,
            isOpen: true,
            modalContent: ModalContent.ADD_TRANSACTION,
        })),
    openFilterTransactions: () =>
        set((state) => ({
            ...state,
            isOpen: true,
            modalContent: ModalContent.FILTER,
        })),
    openAddPaymentType: () =>
        set((state) => ({
            ...state,
            isOpen: true,
            modalContent: ModalContent.ADD_PAYMENT,
        })),
    closeModal: () =>
        set((state) => ({
            ...state,
            isOpen: false,
            modalContent: ModalContent.NONE,
        })),
}));
