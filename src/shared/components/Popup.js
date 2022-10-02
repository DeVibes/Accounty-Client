import React from 'react';
import { GrClose as CloseIcon } from 'react-icons/gr';

import { Color } from '../../utils/colors';

const Popup = ({ children, isVisible, handleClose }) => {
  return (
    <>
        {isVisible && (
          <section className={`absolute z-90 flex justify-center items-center w-full h-full
            backdrop-blur-md transition ease-in-out delay-150`}>
            <div className={`w-10/12 bg-[#24283b] p-4 rounded-lg relative`}>
            {/* <div className={`absolute z-90 w-10/12 p-4 bg-[#24283b] left-1/2 
              -translate-x-1/2 top-1/4 -translate-y-1/4 rounded-lg transition 
              duration-500 ease-in-out`}
            > */}
                <button className={`absolute -top-4 -right-4 bg-[${Color.RED}] rounded-lg p-2
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125`}
                  onClick={handleClose}
                >
                  <CloseIcon size={25}/>
                </button>
                {children}
            </div>
          </section>
        )}
    </>
  );
};

export default Popup;