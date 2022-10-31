import React from 'react'

export const Cards = () => {
    return (
        <ul className='flex h-full overflow-x-hidden'>
            <li className='block h-full w-full bg-red-900 rounded-xl'></li>
            <li className='block h-full w-full bg-green-900 rounded-xl'></li>
            <li className='block h-full w-full bg-yellow-900 rounded-xl'></li>
            <li className='block h-full w-full bg-blue-900 rounded-xl'></li>
        </ul>
    );
};
