import React from 'react';
import { Outlet } from 'react-router-dom';
import Feedback from '../../shared/components/Feedback';
import { Footer } from '../Footer';
import { Header } from '../Header';
import Popup from '../../shared/components/Popup';
import { TransactionForm } from '../TransactionForm/TransactionForm';
import { usePopupContext } from '../../shared/context/popup.context';

export const Layout = () => {
  const { isPopupOpen, isFeedbackOpen, closePopup, hideFeedback } = usePopupContext();
  return (
    <>
      <Popup isVisible={isPopupOpen} handleClose={closePopup}>
        <TransactionForm closePopup={closePopup}/>
      </Popup>
      <Feedback isVisible={isFeedbackOpen} handleClose={hideFeedback}/>
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