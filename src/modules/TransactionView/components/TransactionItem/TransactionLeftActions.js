import React from 'react';
import Spinner from '../../../../shared/components/Spinner';
import { SeenIcon, UnseenIcon } from '../../../../utils/icons';

export const TransactionLeftActions = ({
    isTransactionSeen,
    handleClick,
    isLoading,
}) => {
    return (
        <span
            className={`
             bg-green-600 rounded-l-lg px-3 w-14
            flex justify-center items-center cursor-pointer`}
            onClick={(e) => handleClick(e)}
        >
            {isLoading ? (
                <Spinner />
            ) : isTransactionSeen ? (
                <UnseenIcon size={30} color="white" />
            ) : (
                <SeenIcon size={30} color="black" />
            )}
        </span>
    );
};
