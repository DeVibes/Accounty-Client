import React from 'react';
import Spinner from '../../../../shared/components/Spinner';
import { DeleteIcon } from '../../../../utils/icons';

export const TransactionRightActions = ({
    isConfirmDelete,
    handleClick,
    isLoading,
}) => {
    return (
        <span
            className={`bg-red-600 rounded-r-lg px-3 ${
                isConfirmDelete || isLoading ? 'w-20' : 'w-14'
            }
            flex justify-center items-center cursor-pointer`}
            onClick={handleClick}
        >
            {isLoading ? (
                <Spinner />
            ) : isConfirmDelete ? (
                <span className="text-sm">Confirm?</span>
            ) : (
                <DeleteIcon size={30} />
            )}
        </span>
    );
};
