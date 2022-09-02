import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Popup from '../Shared/Popup';
import TransactionForm from '../Shared/TransactionForm';

import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handlePlusClick = () => setIsPopupOpen(true);
  const handlePopupClose = () => setIsPopupOpen(false);
  return (
    <>
        <Popup isVisible={isPopupOpen} handleClose={handlePopupClose}>
          <TransactionForm/>
        </Popup>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer handlePlusClick={handlePlusClick}/>
        {/* <FAB handleClick={() => console.log("Clicked fab!")} icon={PlusIcon}/> */}
    </>
  );
};

export default Layout;