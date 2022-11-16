import { FilterIcon } from "../../../utils/icons";
import { useModalContext } from "../../Modal/context/modal.context";

export const TransactionsHeader = () => {
    const { openFilterTransactions } = useModalContext();
    return (
        <div className='mb-3 flex justify-between items-end shrink-0'>
            <span className='text-slate-400 text-xl'>Transactions</span>
            <span className='text-slate-500 text-md text-left mr-1'
                onClick={openFilterTransactions}
            >
                <FilterIcon size={25}/>
            </span>
        </div>
    );
};