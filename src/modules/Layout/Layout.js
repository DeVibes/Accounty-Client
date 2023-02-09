import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { TransactionForm } from '../TransactionForm/TransactionForm';
import { Main } from './components/Main';
import { Modal, ModalContent } from '../Modal/Modal';
import { FilterForm } from '../FilterForm/FilterForm';
import { useModalStore } from '../Modal/state/modalStore';
import { shallow } from 'zustand/shallow';
import { useFeedbackStore } from '../../shared/state/feedbackStore';
import { Feedback } from '../../shared/components/Feedback';

export const Layout = () => {
    const { isOpen, modalContent, closeModal } = useModalStore(
        (state) => ({
            isOpen: state.isOpen,
            modalContent: state.modalContent,
            closeModal: state.closeModal,
        }),
        shallow
    );
    const { isFeedbackOpen, msg, closeFeedback } = useFeedbackStore(
        (state) => ({
            isFeedbackOpen: state.isOpen,
            msg: state.msg,
            closeFeedback: state.closeFeedback,
        }),
        shallow
    );

    return (
        <div className="h-screen flex flex-col relative">
            <Modal isOpen={isOpen} closeModal={closeModal} elementHeight={600}>
                {modalContent === ModalContent.ADD_TRANSACTION ? (
                    <TransactionForm closePopup={closeModal} />
                ) : modalContent === ModalContent.FILTER ? (
                    <FilterForm handleClose={closeModal} />
                ) : null}
            </Modal>
            <Header />
            <Main />
            <Footer />
            <Feedback
                isVisible={isFeedbackOpen}
                handleClose={closeFeedback}
                msg={msg}
            />
        </div>
    );
};
