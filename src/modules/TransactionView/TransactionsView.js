import React from 'react';
import { TransactionsHeader } from './components/TransactionsHeader';
import { TransactionsList } from './components/TransactionsList';
import { useFetchTransactions } from './hooks/transactions.hook';
import { SelectedTransactionProvider } from './context/selectedTransaction.context';

export const TransactionsView = () => {
    const { transactions, isLoading } = useFetchTransactions();
    return (
        <SelectedTransactionProvider>
            <section className='container p-4 pr-0 overflow-hidden flex flex-col'>
                <TransactionsHeader/>
                <TransactionsList transactions={transactions} isLoading={isLoading}/>
            </section>
        </SelectedTransactionProvider>
    );
};