import React from 'react';
import { NotificationBadgeHOC } from '../../../../shared/components/NotificationBadge';

export const TransactionCategoryIcon = ({ isTransactionSeen, icon: Icon }) => {
    return (
        <span className="flex justify-center items-center p-3">
            <NotificationBadgeHOC isShown={!isTransactionSeen}>
                <Icon size={45} color="white" />
            </NotificationBadgeHOC>
        </span>
    );
};
