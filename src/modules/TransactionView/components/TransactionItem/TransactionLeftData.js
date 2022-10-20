import React from 'react'

export const TransactionLeftData = ({ desc, store }) => {
    return (
        <span className="flex flex-col justify-around flex-1 ml-3"
        >
            <span className='text-slate-300'>{desc}</span>
            <span className='text-slate-500'>{store}</span>
        </span>
    );
};
