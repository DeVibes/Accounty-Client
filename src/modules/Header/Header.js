import React from 'react';
import { LeftArrow } from '../../utils/icons';
import { useRouting } from '../Router/hooks/routing.hook';

export const Header = () => {
  const { pageTitle, isBackBtnShown, goBack } = useRouting();
  return (
    <header className='text-slate-300 w-full p-4'>
      {isBackBtnShown && (
      <span>
        <LeftArrow size={25} className='inline cursor-pointer' onClick={goBack}/>
      </span>
      )}
      <span className='absolute -translate-x-1/2 left-1/2 font-bold'>{pageTitle}</span>
    </header>
  );
};