import React from 'react';
import { DashboardIcon, TransactionsIcon, WalletIcon } from '../../utils/icons';
import { FooterIcon } from './components/FooterIcon';

const footerClasses = `w-full bg-[#24283b] 
    rounded-t-xl p-2 flex justify-around items-center h-16 shrink-0`;

export const Footer = () => {
    return (
        <footer className={footerClasses}>
            {/* <FooterIcon
                path="/"
                icon={DashboardIcon}
                size={30} 
            /> */}
            <FooterIcon
                path="/wallet"
                icon={WalletIcon}
                size={30} 
            />
            {/* <FooterIcon
                path="/transactions"
                icon={TransactionsIcon}
                size={30} 
            /> */}
        </footer>
    );
};
