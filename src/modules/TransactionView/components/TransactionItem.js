import { NotificationBadgeHOC } from "../../../shared/components/NotificationBadge";
import { CategoriesMap, Category } from "../../../utils/categories";
import { DeleteIcon, SeenIcon } from "../../../utils/icons";

export const TransactionItem = ({ data, isSelected, isAbsoluteFirst, handleClick }) => {
    const Icon = CategoriesMap.get(data.category.name)?.icon ?? Category.Unknown.icon;
    const isBottomBorderShown = (!data.isFirst || isAbsoluteFirst) && !isSelected;
    return (
        <div className="flex">
            {isSelected && (
                <span className={` bg-lime-600 rounded-l-lg 
                    flex justify-center items-center cursor-pointer`}
                >
                    <SeenIcon size={30}/>
                </span>
            )}
            <div className={`grid gap-x-4 grid-rows-2 grid-cols-8 p-2 flex-1 ${!isSelected ? "rounded-lg" : ""} 
                ${isBottomBorderShown ? "border-b-2 border-slate-800" : ""}
                ${isSelected ? "bg-slate-700" : "w-full"}`}
                onClick={handleClick}
            >
                <span className='row-start-1 col-start-1 row-span-2 col-span-1 flex justify-center items-center'>
                    <NotificationBadgeHOC isSeen={!data.seen}>
                        <Icon size={45} color="white"/>
                    </NotificationBadgeHOC>
                </span>
                <div className='row-start-1 col-start-2 col-span-7 flex justify-between'>
                    <span className='text-slate-300'>{data.description}</span>
                    <span className='text-slate-300'>
                        {data.price > 0 && "+"}{Math.abs(data.price)}₪
                    </span>
                </div>
                <div className='row-start-2 col-start-2 col-span-7 flex justify-between'>
                    <span className='text-slate-500'>{data.store}</span>
                    <span className='text-slate-500'>{data.paymentType.name}</span>
                </div>
            </div>
            {isSelected && (
                <span className={` bg-red-600 rounded-r-lg 
                    flex justify-center items-center cursor-pointer`}
                >
                    <DeleteIcon size={30}/>
                </span>
            )}
        </div>
    );
};