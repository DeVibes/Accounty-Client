import { useSelectedTransaction } from "../context/selectedTransaction.context";
import { TransactionListLoader } from "./TransactionListLoader";
import { AnimatedTransactions } from "./AnimatedTransactions";

export const TransactionsList = ({ transactions, isLoading }) => {
    const { selectedTransaction, setTr } = useSelectedTransaction();
    return (
        <div className='overflow-auto pr-4'>
            {isLoading && (
                <TransactionListLoader/>
            )}
            {transactions.length > 0 && 
                <AnimatedTransactions transactions={transactions}
                    selectedTransaction={selectedTransaction}
                    setTr={setTr}
                />
            }
        </div>
    );
};