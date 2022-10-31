import { TransactionActionButton } from "./TransactionActionButton";

export const TransactionsHeader = () => {
    return (
        <div className='mb-3 flex justify-between pr-4 items-center shrink-0'>
            <span className='text-slate-400 text-xl'>Recent transactions</span>
            <TransactionActionButton/>
        </div>
    );
};