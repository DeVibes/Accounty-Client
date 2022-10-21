import React from 'react'
import Spinner from '../../../../shared/components/Spinner';
import { ConfirmIcon, DeleteIcon } from '../../../../utils/icons';

export const TransactionRightActions = ({ isConfirmDelete, handleClick, isLoading, isSuccess }) => {
    return (
        <span className={`bg-red-600 rounded-r-lg px-3 ${isConfirmDelete || isLoading ? "w-20" : "w-14"}
            flex justify-center items-center cursor-pointer`} onClick={handleClick}
        >
            {isLoading ? <Spinner/> : (
                isSuccess ? <ConfirmIcon size={25}/> : (
                isConfirmDelete ? 
                    <span className="text-sm">Confirm?</span> :
                    <DeleteIcon size={30}/> 
            ))}
        </span>
    );
};