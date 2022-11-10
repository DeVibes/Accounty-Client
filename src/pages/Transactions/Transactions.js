import React from 'react'
import { TransactionsView } from '../../modules/TransactionView';
import { useFetchTransactions } from '../../modules/TransactionView/hooks/transactions.hook';

export const Transactions = () => {
    const { transactions, isLoading } = useFetchTransactions();
    return (
        <TransactionsView transactions={transactions} isLoading={isLoading}/>
    );
};