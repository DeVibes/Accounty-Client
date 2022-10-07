import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from '../../pages/Dashboard';
import { Layout } from '../Layout';
import { Wallet } from '../../pages/Wallet';

import { AppPages } from './pages';

export const Router = () => {
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