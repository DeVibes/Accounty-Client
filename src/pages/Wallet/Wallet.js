import React from 'react';
import { TransactionsView } from '../../modules/TransactionView';
import { ActionBar } from './components/ActionBar';
import { PrivateRouteHOC } from '../../modules/Router/components/PrivateRouteHOC';
import { BalanceView } from '../../modules/Analytics/BalanceView';

export const Wallet = () => {
    return (
        <PrivateRouteHOC>
            <BalanceView />
            <ActionBar />
            <TransactionsView isMonthly={true} />
        </PrivateRouteHOC>
    );
};
