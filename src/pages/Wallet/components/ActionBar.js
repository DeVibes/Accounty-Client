import React from 'react'
import { useModalContext } from '../../../modules/Modal/context/modal.context';
import { PlusIcon } from '../../../utils/icons';

export const ActionBar = () => {
    const { openAddTransaction } = useModalContext();
    return (
        <section className='w-full py-2'>
            <button className='w-full p-2 rounded-lg bg-slate-500 flex justify-center'
                onClick={openAddTransaction}
            >
                <PlusIcon size={25}/>
                <span>Add transaction</span>
            </button>
        </section>
    );
};
