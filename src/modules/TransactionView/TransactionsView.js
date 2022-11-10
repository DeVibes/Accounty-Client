import React from 'react';
import { useLocation } from 'react-router-dom';
import { RecentTransactionsHeader } from './components/RecentTransactionsHeader';
import { TransactionsList } from './components/TransactionsList';
import { TransactionsViewError } from './components/TransactionsViewError';
import { SelectedTransactionProvider } from './context/selectedTransaction.context';

export const TransactionsView = ({ transactions, isLoading, isError }) => {
    // const { pathname, isTransactionsPage, isWalletPage } = useLocation();
    return (
        <>
        {isError ? <TransactionsViewError/> : (
            <SelectedTransactionProvider>
                <section className='container py-2 pr-0 overflow-hidden flex flex-col'>
                    <RecentTransactionsHeader/>
                    <TransactionsList transactions={transactions} isLoading={isLoading}/>
                </section>
            </SelectedTransactionProvider>
        )}
        </>
    );
};


