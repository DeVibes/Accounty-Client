import React from 'react';
import { BalanceView } from '../../modules/PaymentsView/BalanceView';
import { calculateTotalSpentAndIncome } from '../../modules/PaymentsView/services/transactions.service';
import { TransactionsView } from '../../modules/TransactionView';
import { useFetchTransactions } from '../../modules/TransactionView/hooks/transactions.hook';
import { ActionBar } from './components/ActionBar';

export const Wallet = () => {
    const { transactions, isLoading } = useFetchTransactions();
	const { total, income } = calculateTotalSpentAndIncome(transactions);
	return (
		<>
			<BalanceView total={total} income={income} isLoading={isLoading}/>
			<ActionBar/>
			<TransactionsView transactions={transactions} isLoading={isLoading}/>
		</>
	);
};