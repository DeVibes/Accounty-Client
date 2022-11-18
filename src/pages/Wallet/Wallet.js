import React, { useEffect } from 'react';
import { BalanceView } from '../../modules/BalanceView';
import { calculateTotalSpentAndIncome, getTimeFrame } from '../../modules/BalanceView/services/transactions.service';
import { TransactionsView } from '../../modules/TransactionView';
import { ActionBar } from './components/ActionBar';
import { useFetchTransactions } from '../../modules/TransactionView/hooks/transactions.hook';
import { useTransactionsFilters } from '../../modules/TransactionView/context/transactionsFilter.context';

export const Wallet = () => {
	const { transactions, isLoading, isError } = useFetchTransactions();
	const { setDateRange } = useTransactionsFilters();
	useEffect(() => {
		const { fromDate, toDate } = getTimeFrame();
		setDateRange(fromDate, toDate);
	}, []);
	useEffect(() => {
		return () => {
			setDateRange(null);
		};
	}, []);
	
	const { total, income } = calculateTotalSpentAndIncome(transactions);
	return (
		<>
			<BalanceView total={total} income={income} isLoading={isLoading} isError={isError}/>
			<ActionBar/>
			<TransactionsView/>
		</>
	);
};