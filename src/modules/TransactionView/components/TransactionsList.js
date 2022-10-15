// import { useSelectedTransaction } from "../context/selectedTransaction.context";
import { useSelectedTransaction } from "../context/selectedTransaction.context";
import { useTabState } from "../context/tab.context";
import { TransactionItem } from "./TransactionItem";
import { TransactionItemHeader } from "./TransactionItemHeader";

export const TransactionsList = ({ transactions }) => {
    const { selectedTransaction, setTr } = useSelectedTransaction();
    const { setNotSelected, setDelete } = useTabState();
    return (
        <div className='overflow-auto pr-4'>
            {transactions.length > 0 && transactions.map((tr, index) => {
                const isSelected = selectedTransaction === tr.id;
                const handleTransactionClick =() => {
                    setTr(tr.id);
                    if(isSelected)
                        setNotSelected();
                    else
                        setDelete();
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