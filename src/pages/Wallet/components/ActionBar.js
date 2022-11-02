import React from 'react'
import { usePopupContext } from '../../../shared/context/popup.context';
import { PlusIcon } from '../../../utils/icons';

export const ActionBar = () => {
    const { openPopup } = usePopupContext();
    return (
        <section className='w-full py-2'>
            <button className='w-full p-2 rounded-lg bg-slate-500 flex justify-center'
                onClick={openPopup}
            >
                <PlusIcon size={25}/>
                <span>Add transaction</span>
            </button>
        </section>
    );
};
