import { TransactionListLoader } from "./TransactionListLoader";
import { AnimatedTransactions } from "./AnimatedTransactions";

export const TransactionsList = ({ transactions, isLoading }) => (
    <div className='pr-4 overflow-y-auto grow'>
        {isLoading && (
            <TransactionListLoader/>
        )}
        {transactions.length > 0 && 
            <AnimatedTransactions transactions={transactions}/>
        }
        </div>
);