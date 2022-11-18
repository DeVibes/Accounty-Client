import React from 'react';
import { useRouting } from '../Router/hooks/routing.hook';
import { RecentTransactionsHeader } from './components/RecentTransactionsHeader';
import { TransactionsHeader } from './components/TransactionsHeader';
import { TransactionsList } from './components/TransactionsList';
import { TransactionsViewError } from './components/TransactionsViewError';
import { SelectedTransactionProvider } from './context/selectedTransaction.context';
import { useFetchTransactions } from './hooks/transactions.hook';

export const TransactionsView = () => {
    const { pagedTransactions, 
        isLoading, 
        isError, 
        hasNextPage, 
        fetchNextPage, 
        isFetchingNextPage 
    } = useFetchTransactions();
    const paginationAPI = {
        hasNextPage, 
        fetchNextPage, 
        isFetchingNextPage 
    }
    const { isWalletPage } = useRouting();
    if (isError)
        return <TransactionsViewError/>;
    return (
        <SelectedTransactionProvider>
            <section className='container py-2 pr-0 overflow-hidden flex flex-col'>
                {isWalletPage ? <RecentTransactionsHeader/> : <TransactionsHeader/>}
                <TransactionsList 
                    pagedTransactions={pagedTransactions} 
                    isLoading={isLoading}
                    paginationAPI={paginationAPI}
                />
            </section>
        </SelectedTransactionProvider>
    );
};


