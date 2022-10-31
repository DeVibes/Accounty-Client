import React from 'react';
import { Outlet } from 'react-router-dom';

export const Main = () => 
  <section className='grow overflow-y-hidden flex flex-col'>
    <Outlet />
  </section>;
