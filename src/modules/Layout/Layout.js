import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AppPages } from '../../router/pages';
// import { useSelectedTransaction } from '../modules/TransactionView/context/selectedTransaction.context';
import { useDeleteTransaction, useFetchTransactions, usePostTransaction } from '../TransactionView/hooks/transactions.hook';

import Feedback from '../../shared/components/Feedback';
import { Footer } from '../Footer';
import { Header } from '../Header';
import Popup from '../../shared/components/Popup';
import { TransactionForm } from '../TransactionForm/TransactionForm';
import { usePopupContext } from '../../shared/context/popup.context';

export const Layout = () => {
  const { isOpen, closePopup } = usePopupContext();
  const { pathname } = useLocation();
  const onSuccessfulSubmit = () => {
    closePopup();
  }
  const { postTransaction, isLoading } = usePostTransaction(onSuccessfulSubmit);
  return (
    <>
      <Popup isVisible={isOpen} handleClose={closePopup}>
        <TransactionForm actions={{ postTransaction }} isLoading={isLoading}/>
      </Popup>
      {/* <Feedback msg="yey" isVisible={isFeedbackOpen} handleClose={() => setIsFeedbackOpen(false)}/> */}
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
};

const Main = () => 
  <main className='grow overflow-auto'>
      <Outlet/>
  </main>