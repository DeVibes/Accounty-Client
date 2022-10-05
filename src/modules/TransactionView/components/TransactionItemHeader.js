import Badge from '../../../shared/components/Badge';

export const TransactionItemHeader = ({ date, price }) => {
    const badgeColorStyle = price < 0 ? "bg-[#8c4351] text-slate-400" : 
        "bg-[#9ece6a] text-slate-700";
    return (
        <div className='flex justify-between mb-1 mt-2'>
            <span className='text-slate-200'>{date.toDateString()}</span>
            <Badge colorStyle={badgeColorStyle}>{price}₪</Badge>
        </div>
    );
};