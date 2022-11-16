import React from 'react'
import { IncomeLabel, OutcomeLabel } from '../../utils/icons';
import { BalanceViewError } from './components/BalanceViewError';
import { BalanceCardLoader } from './components/BalanceCardLoader';

export const BalanceView = ({ isLoading, total, income, isError }) => {
    return (
        <section className='container pb-2 relative'>
        {isLoading ? 
            <BalanceCardLoader/> :
            isError ? 
                <BalanceViewError/> :
                (
                    <div className="bg-slate-800 py-2 h-full rounded-xl flex flex-col justify-around gap-4">
                        <span className='text-gray-500 text-lg text-center'>My Balance</span>
                        <span className='text-gray-200 text-5xl text-center'>{income - total} ₪</span>
                        <div className="w-full flex">
                            <div className="w-full text-center flex items-center border-r-2 border-slate-500 pl-7">
                                <IncomeLabel size={30} className="text-white"/>
                                <div className="pl-3">
                                    <span className='text-slate-500 text-sm block'>Income</span>
                                    <span className='text-slate-200 text-xl'>{income}₪</span>
                                </div>
                            </div>
                            <div className="w-full text-center flex items-center pl-7">
                                <OutcomeLabel size={30} className="text-white"/>
                                <div className="pl-3">
                                    <span className='text-slate-500 text-sm block'>Outcomes</span>
                                    <span className='text-slate-200 text-xl'>{total}₪</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
        }
        </section>
    );
};