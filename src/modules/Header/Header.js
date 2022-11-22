import React from 'react';
import Spinner from '../../shared/components/Spinner';
import { useUserDataContext } from '../../shared/context/user.context';
import { LeftArrow } from '../../utils/icons';
import { useAuth } from '../LoginView/hook/auth.hook';
import { useRouting } from '../Router/hooks/routing.hook';

export const Header = () => {
  const { pageData, isBackBtnShown, goBack } = useRouting();
  const { userData } = useUserDataContext();
  const { isLoading } = useAuth();
  return (
    <header className='text-slate-300 w-full p-4 flex justify-between items-center'>
      {isBackBtnShown && (
      <span>
        <LeftArrow size={25} className='inline cursor-pointer' onClick={goBack}/>
      </span>
      )}
      <span className='font-bold text-xl'>{pageData.name}</span>
      {isLoading ? 
        <span className='w-12 h-12 border rounded-xl flex justify-center items-center'>
          <Spinner/>
        </span> : (
        <img src={`${userData?.picUrl}`} 
          alt="" 
          width={48} 
          height={48}
          className="border rounded-xl"
        />
        )}
    </header>
  );
};