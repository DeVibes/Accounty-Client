import React, { useEffect } from 'react';
import { TransactionsView } from '../../modules/TransactionView';
import { ActionBar } from './components/ActionBar';
import { useTransactionsFilters } from '../../modules/TransactionView/context/transactionsFilter.context';
import { PrivateRouteHOC } from '../../modules/Router/components/PrivateRouteHOC';
import { BalanceView } from '../../modules/Analytics/BalanceView'
import { getTimeFrame } from '../../modules/Analytics/services/analytics.service';

export const Wallet = () => {
	// const { setDateRange } = useTransactionsFilters();
	// const { fromDate, toDate } = getTimeFrame();
	// setDateRange(fromDate, toDate);
	// useEffect(() => {
	// 	console.log("In Wallet's useEffect")
	// }, []);
	
	return (
		<PrivateRouteHOC>
			<BalanceView/>
			<ActionBar/>
			<TransactionsView isMonthly={true}/>
		</PrivateRouteHOC>
	);
};