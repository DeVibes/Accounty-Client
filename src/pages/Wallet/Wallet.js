import React from 'react';
import { BalanceView } from '../../modules/PaymentsView/BalanceView';
import { TransactionsView } from '../../modules/TransactionView';

export const Wallet = () => {
	return (
		<>
			<BalanceView/>
			<TransactionsView/>
		</>
	);
};