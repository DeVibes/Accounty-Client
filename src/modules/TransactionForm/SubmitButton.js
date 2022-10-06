import React from 'react';
import Spinner from '../../shared/components/Spinner';
import { ConfirmIcon } from '../../utils/icons';

export const SubmitButton = ({ state }) => {
    const { isLoading, isSuccess } = state;
    let buttonJsx;
    if (isLoading) {
        buttonJsx = <Spinner/>;
    }
    else if (isSuccess)
        buttonJsx = <ConfirmIcon size={25}/>;
    else 
        buttonJsx = <input type="submit" value={isSuccess ? "Saved" : "Save"} className='cursor-pointer'/>;
    return (
        <span className={`w-full text-white p-2 rounded-lg flex justify-center 
            ${isLoading || isSuccess ? "bg-slate-400 cursor-progress" : 
            "bg-[#7aa2f7] cursor-pointer"}`}
        >
            {buttonJsx}
        </span>
    );
};
