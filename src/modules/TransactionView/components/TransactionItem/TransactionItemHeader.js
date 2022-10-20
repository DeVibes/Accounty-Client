export const TransactionItemHeader = ({ date, price }) => {
    return (
        <div className='flex justify-between mb-1 py-1 mt-2 bg-slate-800 rounded-xl'>
            <span className='ml-2 text-slate-200'>{new Date(date).toDateString()}</span>
            <span className='mr-2 text-slate-200 text-md font-medium'>{price > 0 && "+"}{Math.abs(price)}</span>
        </div>
    );
};