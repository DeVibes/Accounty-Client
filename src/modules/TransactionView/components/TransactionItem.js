import { CategoriesMap, Category } from "../../../utils/categories";

export const TransactionItem = ({ data, isSelected, isAbsoluteFirst, handleClick }) => {
    const Icon = CategoriesMap.get(data.category.name)?.icon ?? Category.Unknown.icon;
    const isBottomBorderShown = !data.isFirst || isAbsoluteFirst;
    return (
        <div className={`grid grid-rows-2 grid-cols-6 p-2 ${isBottomBorderShown && "rounded-lg border-b-2 border-slate-800"}
         ${isSelected && "bg-slate-700"}`}
            onClick={handleClick}
        >
            <span className='row-start-1 row-span-2 col-span-1'>
                <Icon size={45} color="white"/>
            </span>
            <div className='row-start-1 col-start-2 col-span-5 flex justify-between'>
                <span className='text-slate-300'>{data.description}</span>
                <span className='text-slate-300'>
                    {data.price > 0 && "+"}{Math.abs(data.price)}₪
                </span>
            </div>
            <div className='row-start-2 col-start-2 col-span-5 flex justify-between'>
                <span className='text-slate-500'>{data.store}</span>
                <span className='text-slate-500'>{data.paymentType.name}</span>
            </div>
        </div>
    );
};