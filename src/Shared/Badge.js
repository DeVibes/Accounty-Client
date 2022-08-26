import React from 'react';

const Badge = ({ children, colorStyle }) => {
  return (
    <span
        className={`${colorStyle} text-sm font-medium px-3 py-1 rounded-xl`}
    >
        {children}
    </span>
  );
};

export default Badge;