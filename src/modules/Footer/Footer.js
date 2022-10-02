import React from 'react';

import { AppPages } from '../../router/pages';
import { FAB } from './Fab';
import { FooterIcon } from './FooterIcon';

const footerClasses = `w-full bg-[#24283b] 
    rounded-t-xl p-4 flex justify-around relative`;

export const Footer = ({ handlers, states, isTransactionPage, isDeleteLoading }) => {
    return (
        <footer className={footerClasses}>
            {AppPages.map(pageData => (
                <FooterIcon 
                    props={pageData} 
                    size={30} 
                    key={pageData.value} 
                />
            ))}
            {isTransactionPage && (
                <FAB handlers={handlers}
                    fabState={states.fabState}
                    isLoading={isDeleteLoading}
                />
            )}
        </footer>
    );
};
