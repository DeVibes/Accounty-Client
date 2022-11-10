import React from 'react';
import { BalanceView } from '../../modules/BalanceView';
import { calculateTotalSpentAndIncome } from '../../modules/BalanceView/services/transactions.service';
import { TransactionsView } from '../../modules/TransactionView';
import { useFetchRecentTransactions } from '../../modules/BalanceView/hooks/recentTransactions.hook';
import { ActionBar } from './components/ActionBar';

export const Wallet = () => {
    const { transactions, isLoading, isError } = useFetchRecentTransactions();
	const { total, income } = calculateTotalSpentAndIncome(transactions);
	return (
		<>
			<BalanceView total={total} income={income} isLoading={isLoading} isError={isError}/>
			<ActionBar/>
			<TransactionsView transactions={transactions} isLoading={isLoading} isError={isError}/>
		</>
	);
};