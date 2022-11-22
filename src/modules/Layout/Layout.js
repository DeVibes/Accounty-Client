import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { TransactionForm } from '../TransactionForm/TransactionForm';
import { Main } from './components/Main';
import { Modal, ModalContent } from '../Modal/Modal';
import { useModalContext } from '../Modal/context/modal.context';
import { FilterForm } from '../FilterForm/FilterForm';

export const Layout = () => {
	const { isModalOpen, modalContent, closeModal } = useModalContext();
	return (
		<div className='h-screen flex flex-col relative'>
		<Modal isOpen={isModalOpen} closeModal={closeModal} elementHeight={600}>
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