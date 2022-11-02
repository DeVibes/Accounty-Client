import { TransactionListLoader } from "./TransactionListLoader";
import { AnimatedTransactions } from "./AnimatedTransactions";

export const TransactionsList = ({ transactions, isLoading }) => (
    <div className='overflow-y-auto grow'>
        {isLoading && (
            <TransactionListLoader/>
        )}
        {transactions.length > 0 && 
            <AnimatedTransactions transactions={transactions}/>
        }
        </div>
);