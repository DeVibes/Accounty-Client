import React from 'react';
import { TransactionsView } from '../../modules/TransactionView';
import { ActionBar } from './components/ActionBar';
import { PrivateRouteHOC } from '../../modules/Router/components/PrivateRouteHOC';
import { DetailedBalance } from '../../modules/Analytics/DetailedBalance';

export const Wallet = () => {
    return (
        <PrivateRouteHOC>
            <DetailedBalance />
            <ActionBar />
            <TransactionsView isMonthly={true} />
        </PrivateRouteHOC>
    );
};
