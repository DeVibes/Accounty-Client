import React from 'react';

import { Color } from '../../utils/colors';
import { CloseIcon } from '../../utils/icons';

const Popup = ({ children, isVisible, handleClose }) => {
  return (
    <>
        {isVisible && (
          <section className={`absolute z-50 flex justify-center items-center w-full h-full
            backdrop-blur-md transition ease-in-out delay-150`}
          >
            <div className={`w-10/12 bg-[#24283b] p-4 rounded-lg relative`}>
              <button className={`absolute -top-4 -right-4 bg-[#8c4351] rounded-lg p-2
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