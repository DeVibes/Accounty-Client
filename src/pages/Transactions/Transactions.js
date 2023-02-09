import React from 'react';
import { PrivateRouteHOC } from '../../modules/Router/components/PrivateRouteHOC';
import { TransactionsView } from '../../modules/TransactionView';

export const Transactions = () => {
    return (
        <PrivateRouteHOC>
            <TransactionsView />
        </PrivateRouteHOC>
    );
};
