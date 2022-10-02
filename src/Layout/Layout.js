import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AppPages } from '../router/pages';
import { FabState, useSelectedTransaction } from '../shared/hooks/context.hook';
import { useDeleteTransaction, useFetchTransactions, usePostTransaction } from '../modules/TransactionView/hooks/transactions.hook';

import Feedback from '../shared/components/Feedback';
import { Footer } from '../modules/Footer';
import { Header } from '../modules/Header';
import Popup from '../shared/components/Popup';
import { TransactionForm } from '../modules/TransactionForm/TransactionForm';

export const Layout = () => {
  const { states, setters } = useSelectedTransaction();
	const { refetch } = useFetchTransactions();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const { pathname } = useLocation();
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
      <Feedback msg="yey" isVisible={isFeedbackOpen} handleClose={() => setIsFeedbackOpen(false)}/>
      <Header/>
      <Main/>
      <Footer handlers={{ handlePlusClick, handleDeleteClick, handleConfirmDeleteClick }} 
        states={{ 
          isSelectedTransaction: !!states.selectedTransaction, 
          fabState: states.fabState
        }}
        isTransactionPage={pathname === AppPages[1].path}
        isDeleteLoading={isDeleteLoading} 
      />
    </>
  );
};

const Main = () => 
  <main className='grow overflow-auto'>
      <Outlet/>
  </main>