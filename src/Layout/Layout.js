import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useFetchTransactions, usePostTransaction } from '../hooks/transactions.hook';
import Popup from '../Shared/Popup';
import TransactionForm from '../Shared/TransactionForm';

import Footer from './Footer';
import Header from './Header';

const Layout = () => {
	const { refetch } = useFetchTransactions();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handlePlusClick = () => setIsPopupOpen(true);
  const handlePopupClose = () => setIsPopupOpen(false);
  const onSuccessfulSubmit = () => {
    refetch();
    handlePopupClose();
  }
  const { postTransaction, isLoading } = usePostTransaction(onSuccessfulSubmit);
  return (
    <>
        <Popup isVisible={isPopupOpen} handleClose={handlePopupClose}>
          <TransactionForm actions={{ postTransaction }} isLoading={isLoading}/>
        </Popup>
        <Header/>
        <Main/>
        <Footer handlePlusClick={handlePlusClick}/>
        {/* <FAB handleClick={() => console.log("Clicked fab!")} icon={PlusIcon}/> */}
    </>
  );
};

export default Layout;

const Main = () => 
  <main className='grow overflow-auto'>
      <Outlet/>
  </main>