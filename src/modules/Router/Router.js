import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from '../../pages/Dashboard';
import { Layout } from '../Layout';
import { Wallet } from '../../pages/Wallet';
import { Transactions } from '../../pages/Transactions';
import { LoginPage } from '../../pages/Login/';
import { MyAccount } from '../../pages/MyAccount/';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path={'/'} element={<Wallet />} />
                    <Route path={'/dashboard'} element={<Dashboard />} />
                    <Route path={'/transactions'} element={<Transactions />} />
                    <Route path={'/account'} element={<MyAccount />} />
                </Route>
                <Route path={'/login'} element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
};
