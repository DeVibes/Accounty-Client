import React from 'react';
import { CloseIcon } from '../../utils/icons';

const Feedback = ({ isVisible, handleClose }) => {
  return (
    <>
    {isVisible && (
      <div id="toast-undo" 
          className={`z-50 absolute left-1/2 -translate-x-1/2 bottom-8 flex items-center 
            px-4 py-2 w-full max-w-xs text-gray-500 rounded-lg shadow 
            dark:text-gray-400 bg-[#24283b]`} role="alert"
          >
          <div className="text-sm font-normal">
            {/* {msg} */}
          </div>
          <div className="flex items-center ml-auto space-x-2">
              <button type="button" 
                className="bg-white rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-undo" aria-label="Close"
                onClick={handleClose}
              >
                <CloseIcon size={25} className="fill-gray-400"/>
              </button>
          </div>
      </div>
    )}
    </>
  );
};

export default Feedback