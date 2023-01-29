import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { TransactionForm } from '../TransactionForm/TransactionForm';
import { Main } from './components/Main';
import { Modal, ModalContent } from '../Modal/Modal';
import { useModalContext } from '../Modal/context/modal.context';
import { FilterForm } from '../FilterForm/FilterForm';
import { useModalStore } from '../Modal/state/modalStore';
import { shallow } from 'zustand/shallow';

export const Layout = () => {
	const { isOpen, modalContent, closeModal } = useModalStore(state => ({
		isOpen: state.isOpen,
		modalContent: state.modalContent,
		closeModal: state.closeModal
	}), shallow);
	return (
		<div className='h-screen flex flex-col relative'>
			<Modal isOpen={isOpen} closeModal={closeModal} elementHeight={600}>
				{modalContent === ModalContent.ADD_TRANSACTION ? (
				<TransactionForm closePopup={closeModal}/>
				): modalContent === ModalContent.FILTER ? <FilterForm handleClose={closeModal}/> : null}
			</Modal>
			<Header/>
			<Main/>
			<Footer/>
		</div>
	);
};