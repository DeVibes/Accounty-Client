import React from 'react';
import { CategoriesMap, Category } from '../Data/categories';
import { PaymentTypesMap } from '../Data/paymentTypes';
import { useFetchTransactions } from '../hooks/transactions.hook';
import Badge from '../Shared/Badge';

const Transactions = () => {
    const { transactions, status } = useFetchTransactions();
    return (
        <section className='container p-4 h-full flex flex-col pr-0'>
            {/* <TransactionsHeader/> */}
            <TransactionsList transactions={transactions}/>
        </section>
    );
};

export default Transactions;

const TransactionsHeader = () => {
    return (
        <div className='mb-3'>
            <span className='text-slate-400'>Transactions</span>
        </div>
    );
};

const TransactionsList = ({ transactions }) => {
    return (
        <div className='overflow-auto pr-4'>
            {transactions.length > 0 && transactions.map(tr => (
                <div key={tr.id} className='my-4'>
                    {tr.isLast && (
                        <TransactionItemHeader date={tr.date} price={tr.dailySum}/>
                    )}
                    <TransactionItem data={tr}/>
                </div>
            ))}
        </div>
    );
};

const TransactionItemHeader = ({ date, price }) => {
    const badgeColorStyle = price < 0 ? "bg-[#8c4351] text-slate-400" : 
        "bg-[#9ece6a] text-slate-700";
    return (
        <div className='flex justify-between mb-1'>
            <span className='text-slate-200'>{date.toDateString()}</span>
            <Badge colorStyle={badgeColorStyle}>{price}₪</Badge>
        </div>
    );
};

const TransactionItem = ({ data }) => {
    const Icon = CategoriesMap.get(data.categoryId)?.icon ?? Category.Unknown.icon;
    const paymentTypeName = PaymentTypesMap.get(data.paymentTypeId).name;
    return (
        <div className='grid grid-rows-2 grid-cols-6'>
            <span className='row-start-1 row-span-2 col-span-1'>
                <Icon size={50} color="white"/>
            </span>
            <div className='row-start-1 col-start-2 col-span-5 flex justify-between'>
                <span className='text-slate-300'>{data.description}</span>
                <span className={data.price > 0 ? 'text-[#9ece6a]' : 'text-[#8c4351]'}>
                    {data.price}₪
                </span>
            </div>
            <div className='row-start-2 col-start-2 col-span-5 flex justify-between'>
                <span className='text-slate-500'>{data.store}</span>
                <span className='text-slate-500'>{paymentTypeName}</span>
            </div>
        </div>
    );
};