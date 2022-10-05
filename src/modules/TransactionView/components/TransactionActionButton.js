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
    const { tabState, setConfirm, setLoading, setNotSelected } = useTabState();
    const { deleteTransaction, isLoading } = useDeleteTransaction(() => {
        setNotSelected();
    });
    const buttonStyles = "rounded-lg px-6 w-1/6 h-10 flex justify-center items-center";
    // let buttonJsx;
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
            return (
                <button className={`${buttonStyles} border border-red-400 text-red-400`}
                    onClick={() => deleteTransaction(selectedTransaction)}
                >
                    {isLoading ? (
                        <span className="text-red-400 fill-red-400">
                            <Spinner/>
                        </span>
                    ): (
                        <ConfirmIcon size={25}/>
                    )}
                </button>
            );
        default: break;
    }
};