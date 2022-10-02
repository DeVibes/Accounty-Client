import React from 'react';
import { FabState, useSelectedTransaction } from '../../shared/hooks/context.hook';
import { useFetchTransactions } from './hooks/transactions.hook';
import { TransactionsList } from './components/TransactionsList';

export const Transactions = () => {
    const { transactions } = useFetchTransactions();
    const { states, setters } = useSelectedTransaction();
    const handleTransactionClick = selectedTid => {
        setters.setSelectedTransaction(selectedTid);
        setters.setFabState(selectedTid === null ? FabState.NOT_SELECTED : FabState.DELETE);
    };
    return (
        <section className='container p-4 h-full flex flex-col pr-0'>
            {/* <TransactionsHeader/> */}
            <TransactionsList transactions={transactions} 
                onTransactionClick={handleTransactionClick}
                selectedTransaction={states.selectedTransaction}
            />
        </section>
    );
};