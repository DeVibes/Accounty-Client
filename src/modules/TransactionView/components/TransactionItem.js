import { CategoriesMap, Category } from "../../../utils/categories";
import { PaymentTypesMap } from "../../../utils/paymentTypes";

export const TransactionItem = ({ data, handleClick, isSelected }) => {
    const Icon = CategoriesMap.get(data.categoryId)?.icon ?? Category.Unknown.icon;
    const paymentTypeName = PaymentTypesMap.get(data.paymentTypeId).name;
    return (
        <div className={`grid grid-rows-2 grid-cols-6 p-2 rounded-lg 
         ${isSelected && "bg-slate-700"}`}
            onClick={() => handleClick(isSelected ? null : data.id)}
        >
            <span className='row-start-1 row-span-2 col-span-1'>
                <Icon size={50} color="white"/>
            </span>
            <div className='row-start-1 col-start-2 col-span-5 flex justify-between'>
                <span className='text-slate-300'>{data.description}</span>
                <span className={data.price > 0 ? 'text-[#9ece6a]' : 'text-[#8c4351]'}>
                    {data.price}₪
                </span>
            </div>
            <div className='row-start-2 col-start-2 col-span-5 flex justify-between'>
                <span className='text-slate-500'>{data.store}</span>
                <span className='text-slate-500'>{paymentTypeName}</span>
            </div>
        </div>
    );
};