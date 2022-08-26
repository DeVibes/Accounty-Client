import React from 'react';
import { useLocation } from 'react-router-dom';

import { AppPages } from '../Data/pages';

const Header = () => {
  const locationPath = useLocation().pathname;
  const pageTitle = AppPages.find(page => page.path === locationPath).name;
  return (
    <header className='p-4'>
        <span className='text-slate-400'>
            {pageTitle}
        </span>
    </header>
  );
};

export default Header;