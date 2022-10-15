import Badge from '../../../shared/components/Badge';

export const TransactionItemHeader = ({ date, price }) => {
    const badgeColorStyle = price < 0 ? "bg-[#8c4351] text-slate-400" : 
        "bg-[#9ece6a] text-slate-700 mr-2";
    return (
        <div className='flex justify-between mb-1 py-2 mt-2 bg-slate-800 rounded-xl'>
            <span className='ml-2 text-slate-200'>{new Date(date).toDateString()}</span>
            <Badge colorStyle={badgeColorStyle}>{price}₪</Badge>
        </div>
    );
};