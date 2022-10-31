import React from 'react';
import Feedback from '../../shared/components/Feedback';
import { Footer } from '../Footer';
import { Header } from '../Header';
import Popup from '../../shared/components/Popup';
import { TransactionForm } from '../TransactionForm/TransactionForm';
import { usePopupContext } from '../../shared/context/popup.context';
import { Main } from './Main';

export const Layout = () => {
  const { isPopupOpen, isFeedbackOpen, closePopup, hideFeedback } = usePopupContext();
  return (
    <div className='h-screen flex flex-col'>
      <Popup isVisible={isPopupOpen} handleClose={closePopup}>
        <TransactionForm closePopup={closePopup}/>
      </Popup>
      <Feedback isVisible={isFeedbackOpen} handleClose={hideFeedback}/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
};

