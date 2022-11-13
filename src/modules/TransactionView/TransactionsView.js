import React from 'react';
import { useRouting } from '../Router/hooks/routing.hook';
import { RecentTransactionsHeader } from './components/RecentTransactionsHeader';
import { TransactionsHeader } from './components/TransactionsHeader';
import { TransactionsList } from './components/TransactionsList';
import { TransactionsViewError } from './components/TransactionsViewError';
import { SelectedTransactionProvider } from './context/selectedTransaction.context';

export const TransactionsView = ({ transactions, isLoading, isError }) => {
    const { isWalletPage } = useRouting();
    return (
        <>
        {isError ? <TransactionsViewError/> : (
            <SelectedTransactionProvider>
                <section className='container py-2 pr-0 overflow-hidden flex flex-col'>
                    {isWalletPage ? <RecentTransactionsHeader/> : <TransactionsHeader/>}
                    <TransactionsList transactions={transactions} isLoading={isLoading}/>
                </section>
            </SelectedTransactionProvider>
        )}
        </>
    );
};


