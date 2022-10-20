import React from 'react'

export const TransactionRightData = ({ price, paymentName }) => {
    return (
        <span className="flex flex-col justify-around flex-1 ml-3 text-right px-3">
            <span className='text-slate-300'>
                {price > 0 && "+"}{Math.abs(price)}₪
            </span>
            <span className='text-slate-500'>{paymentName}</span>
        </span>
    );
};
