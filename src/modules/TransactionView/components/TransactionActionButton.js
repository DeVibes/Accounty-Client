import React from 'react'
import { PlusIcon } from '../../../utils/icons';
import { usePopupContext } from '../../../shared/context/popup.context';

export const TransactionActionButton = () => {
    const { openPopup } = usePopupContext();
    const buttonStyles = "rounded-lg px-6 w-1/5 h-8 flex justify-center items-center";
    return (
        <button className={`${buttonStyles} border text-slate-300`}
            onClick={openPopup}
        >
            <PlusIcon size={25}/>
        </button>
    );
};