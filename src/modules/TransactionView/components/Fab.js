import { ConfirmIcon, DeleteIcon, PlusIcon } from "../../../utils/icons";
import { FabState } from "../hooks/useTabState.hook";
import Spinner from "../../../shared/components/Spinner";

export const FAB = ({ handlers, fabState = FabState.NOT_SELECTED, isLoading }) => {
    // const { handlePlusClick, handleDeleteClick, handleConfirmDeleteClick } = handlers;
    switch (fabState) {
        case FabState.NOT_SELECTED:
            return (
                <button className={`bg-[#7aa2f7] rounded-lg absolute bottom-8 right-10
                    transition ease-in-out delay-150 hover:scale-125
                    z-90`}
                    // onClick={handlePlusClick}
                >
                    <PlusIcon size={40}/>
                </button>
            );
        case FabState.DELETE:
            return (
                <button className={`bg-[#8c4351] rounded-lg absolute -top-5 text-slate-300
                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125`}
                    // onClick={handleDeleteClick}
                >
                    <DeleteIcon size={40}/>
                </button>
            );
        case FabState.CONFIRM_DELETE:
            return (
                <button className={`bg-[#8c4351] rounded-xl absolute -top-5 p-2 text-slate-300
                    transition ease-in-out delay-150
                    scale-125 hover:-translate-y-1 hover:scale-150 flex items-center`} 
                    // onClick={handleConfirmDeleteClick}
                >
                    {isLoading ? (
                        <Spinner/>
                    ) : (
                        <>
                            <ConfirmIcon size={20}/>
                            <span className='ml-2'>Confirm</span>
                        </>
                    )}
                </button>
            );
        default:
            break;
    }
};