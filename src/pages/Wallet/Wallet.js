import React from 'react';
import { BalanceView } from '../../modules/PaymentsView/BalanceView';
import { TransactionsView } from '../../modules/TransactionView';
import { useFetchTransactions } from '../../modules/TransactionView/hooks/transactions.hook';

export const Wallet = () => {
    const { transactions, isLoading } = useFetchTransactions();
	return (
		<>
			<BalanceView transactions={transactions} isLoading={isLoading}/>
			<TransactionsView transactions={transactions} isLoading={isLoading}/>
		</>
	);
};