import React from 'react'

export const NotificationBadgeHOC = ({ children, isSeen }) => {
    if (isSeen)
        return (
            <span className='relative'>
                {children}
                <div className={`absolute -top-1 -right-1 inline-flex justify-center
                    items-center w-4 h-4 rounded-md bg-red-700 cursor-pointer`}
                />
            </span>
        );
    return (
        <>{children}</>
  );
};