import React from 'react';

import { AppPages } from '../Router/pages';
import { FooterIcon } from './components/FooterIcon';

const footerClasses = `w-full bg-[#24283b] 
    rounded-t-xl p-2 flex justify-around items-center h-16`;

export const Footer = () => {
    return (
        <footer className={footerClasses}>
            {AppPages.map(pageData => (
                <FooterIcon 
                    props={pageData} 
                    size={30} 
                    key={pageData.value} 
                />
            ))}
        </footer>
    );
};
