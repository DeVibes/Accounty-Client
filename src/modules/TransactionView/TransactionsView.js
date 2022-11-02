import React from 'react';
import { TransactionsHeader } from './components/TransactionsHeader';
import { TransactionsList } from './components/TransactionsList';
import { SelectedTransactionProvider } from './context/selectedTransaction.context';

export const TransactionsView = ({ transactions, isLoading }) => {
    return (
        <SelectedTransactionProvider>
            <section className='container py-2 pr-0 overflow-hidden flex flex-col'>
                <TransactionsHeader/>
                <TransactionsList transactions={transactions} isLoading={isLoading}/>
            </section>
        </SelectedTransactionProvider>
    );
};