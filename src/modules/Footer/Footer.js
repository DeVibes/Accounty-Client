import React from 'react';

import { AppPages } from '../../router/pages';
import { FooterIcon } from './components/FooterIcon';

const footerClasses = `w-full bg-[#24283b] 
    rounded-t-xl p-4 flex justify-around relative`;

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
