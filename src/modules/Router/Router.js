import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from '../../pages/Dashboard';
import { Layout } from '../Layout';
import { Wallet } from '../../pages/Wallet';
import { Transactions } from '../../pages/Transactions';
import { LoginPage } from '../../pages/Login/';
import { Profile } from '../../pages/Profile/Profile';

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout/>}>
					{/* <Route path={"/"} element={<Dashboard/>}/> */}
					{/* <Route path={"/"} element={<Wallet/>}/> */}
					<Route path={"/wallet"} element={<Wallet/>}/>
					<Route path={"/transactions"} element={<Transactions/>}/>
					<Route path={"/profile"} element={<Profile/>}/>
				</Route>
				<Route path={"/login"} element={<LoginPage/>}/>
			</Routes>
		</BrowserRouter>
	);
};