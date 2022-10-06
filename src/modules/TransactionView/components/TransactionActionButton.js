import React from 'react'
import { ConfirmIcon, DeleteIcon, PlusIcon } from '../../../utils/icons';
import Spinner from '../../../shared/components/Spinner'
import { TabState, useTabState } from '../context/tab.context';
import { useDeleteTransaction } from '../hooks/transactions.hook';
import { usePopupContext } from '../../../shared/context/popup.context';
import { useSelectedTransaction } from '../context/selectedTransaction.context';

export const TransactionActionButton = () => {
    const { openPopup } = usePopupContext();
    const { selectedTransaction } = useSelectedTransaction();
    const { tabState, setConfirm, setNotSelected } = useTabState();
    const onSuccessfulDelete = () => {
        setTimeout(() => {
            setNotSelected();
        }, 1500);
    };
    const { deleteTransaction, isLoading, isSuccess } = useDeleteTransaction(onSuccessfulDelete);
    const buttonStyles = "rounded-lg px-6 w-1/5 h-8 flex justify-center items-center";
    switch (tabState) {
        case TabState.NOT_SELECTED:
            return (
                <button className={`${buttonStyles} border text-slate-300`}
                    onClick={openPopup}
                >
                    <PlusIcon size={25}/>
                </button>
            );
        case TabState.DELETE:
            return (
                <button className={`${buttonStyles} bg-red-400 border-red-400`}
                    onClick={setConfirm}
                >
                    <DeleteIcon size={25}/>
                </button>
            );
        case TabState.CONFIRM_DELETE:
            let buttonJsx;
            if (isLoading)
                buttonJsx = <Spinner/>;
            else if (isSuccess)
                buttonJsx = <ConfirmIcon size={25}/>;
            else
                buttonJsx = <span className='text-md'>Confirm?</span>;
            return (
                <button className={`${buttonStyles} border-red-400 
                    ${isLoading ? "bg-slate-400 cursor-not-allowed" : "bg-red-400"}`}
                    onClick={() => deleteTransaction(selectedTransaction)}
                    disabled={isLoading}
                >
                    {buttonJsx}
                </button>
            );
        default: break;
    }
};