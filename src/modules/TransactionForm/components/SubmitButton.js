import React from 'react';
import Spinner from '../../../shared/components/Spinner';
import { ConfirmIcon, ErrorIcon } from '../../../utils/icons';

export const SubmitButton = ({ state, isFormLoading, isFormError }) => {
    const { isLoading, isSuccess } = state;
    let buttonJsx;
    if (isLoading)
        buttonJsx = <Spinner/>;
    else if (isSuccess)
        buttonJsx = <ConfirmIcon size={25}/>;
    else if (isFormError) {
        buttonJsx = <div className='flex'>
            <ErrorIcon size={25} className="inline text-white mr-3" />
            <span className='text-white'>Sorry an error occured</span>
        </div>
    }
    else 
        buttonJsx = <input disabled={isFormLoading} type="submit" value="Save" className='cursor-pointer w-full'/>;
    return (
        <span className={`w-full text-white p-2 rounded-lg flex justify-center 
            ${isLoading || isSuccess || isFormError || isFormLoading ? "bg-slate-400 cursor-not-allowed" : 
            "bg-[#7aa2f7] cursor-pointer"}`}
        >
            {buttonJsx}
        </span>
    );
};
