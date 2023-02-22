import React from 'react';
import { TransactionsView } from '../../modules/TransactionView';
import { ActionBar } from './components/ActionBar';
import { PrivateRouteHOC } from '../../modules/Router/components/PrivateRouteHOC';
import { BalanceView } from '../../modules/Analytics/BalanceView';
import { CategoryChart } from '../../modules/Analytics/CategoryChart';

export const Wallet = () => {
    return (
        <PrivateRouteHOC>
            <CategoryChart />
            {/* <BalanceView /> */}
            <ActionBar />
            <TransactionsView isMonthly={true} />
        </PrivateRouteHOC>
    );
};
