import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { FabState, useSelectedTransaction } from '../hooks/context.hook';
import { useDeleteTransaction, useFetchTransactions, usePostTransaction } from '../hooks/transactions.hook';
import Feedback from '../Shared/Feedback';
import Popup from '../Shared/Popup';
import TransactionForm from '../Shared/TransactionForm';

import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  const { states, setters } = useSelectedTransaction();
	const { refetch } = useFetchTransactions();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handlePlusClick = () => {
    setters.setFabState(FabState.SELECTED);
    setIsPopupOpen(true)
  };
  const handlePopupClose = () => setIsPopupOpen(false);
  const handleDeleteClick = () => {
    setters.setFabState(FabState.CONFIRM_DELETE);
  };
  const handleConfirmDeleteClick = () => {
    deleteTransaction(states.selectedTransaction);
    setters.setFabState(FabState.NOT_SELECTED);
  }
  const onSuccessfulSubmit = () => {
    refetch();
    handlePopupClose();
  }
  const onSuccessfulDelete = () => {
    setters.setSelectedTransaction(null);
    refetch();
  };
  const { postTransaction, isLoading } = usePostTransaction(onSuccessfulSubmit);
  const { deleteTransaction, isLoading: isDeleteLoading } = useDeleteTransaction(onSuccessfulDelete);
  return (
    <>
      <Popup isVisible={isPopupOpen} handleClose={handlePopupClose}>
        <TransactionForm actions={{ postTransaction }} isLoading={isLoading}/>
      </Popup>
      <Header/>
      <Main/>
      <Footer handlers={{ handlePlusClick, handleDeleteClick, handleConfirmDeleteClick }} 
        states={{ 
          isSelectedTransaction: !!states.selectedTransaction, 
          fabState: states.fabState
        }}
      />
    </>
  );
};

export default Layout;

const Main = () => 
  <main className='grow overflow-auto'>
      <Outlet/>
  </main>