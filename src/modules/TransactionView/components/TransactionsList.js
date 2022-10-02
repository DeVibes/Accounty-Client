import { TransactionItem } from "./TransactionItem";
import { TransactionItemHeader } from "./TransactionItemHeader";

export const TransactionsList = ({ transactions, selectedTransaction, onTransactionClick }) => {
    return (
        <div className='overflow-auto pr-4'>
            {transactions.length > 0 && transactions.map(tr => (
                <div key={tr.id}>
                    {tr.isLast && (
                        <TransactionItemHeader date={tr.date} price={tr.dailySum}/>
                    )}
                    <TransactionItem data={tr} handleClick={onTransactionClick}
                        isSelected={selectedTransaction === tr.id}
                    />
                </div>
            ))}
        </div>
    );
};