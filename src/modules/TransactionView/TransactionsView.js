import React from 'react';
import { TransactionsHeader } from './components/TransactionsHeader';
import { TransactionsList } from './components/TransactionsList';
import { useFetchTransactions } from './hooks/transactions.hook';
import { SelectedTransactionProvider } from './context/selectedTransaction.context';

export const TransactionsView = () => {
    const { transactions } = useFetchTransactions();
    return (
        <SelectedTransactionProvider>
            <section className='container p-4 h-full flex flex-col pr-0 relative'>
                <TransactionsHeader/>
                <TransactionsList transactions={transactions}/>
            </section>
        </SelectedTransactionProvider>
    );
};