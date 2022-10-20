import { useSelectedTransaction } from "../context/selectedTransaction.context";
import { TransactionItem } from "./TransactionItem";
import { TransactionItemHeader } from "./TransactionItem/TransactionItemHeader";

export const TransactionsList = ({ transactions }) => {
    const { selectedTransaction, setTr } = useSelectedTransaction();
    return (
        <div className='overflow-auto pr-4'>
            {transactions.length > 0 && transactions.map((tr, index) => {
                const isSelected = selectedTransaction === tr.id;
                const handleTransactionClick = () => {
                    setTr(tr.id);
                }
                return (
                    <div key={tr.id}>
                        {tr.isLast && (
                            <TransactionItemHeader date={tr.date} price={tr.dailySum}/>
                        )}
                        <TransactionItem data={tr}
                            handleClick={handleTransactionClick}
                            isSelected={isSelected}
                            isAbsoluteFirst={index === transactions.length - 1}
                        />
                    </div>
                )
            })}
        </div>
    );
};