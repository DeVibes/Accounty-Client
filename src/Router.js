import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppPages } from './Data/pages';
import Layout from './Layout/Layout';
import Dashboard from './Pages/Dashboard';
import Wallet from './Pages/Wallet';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path={AppPages[0].path} element={<Dashboard/>}/>
                <Route path={AppPages[1].path} element={<Wallet/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default Router;