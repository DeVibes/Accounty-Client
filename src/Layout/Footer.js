import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoAddOutline as PlusIcon } from 'react-icons/io5';

import { AppPages } from '../Data/pages';

const footerClasses = `w-full bg-[#24283b] 
    rounded-t-xl p-4 flex justify-around relative`;

const Footer = ({ handlePlusClick }) => {
  return (
    <footer className={footerClasses}>
        {AppPages.map(pageData => (
            <FooterIcon 
                props={pageData} 
                size={30} 
                key={pageData.value} 
            />
        ))}
        <button className={`bg-[#7aa2f7] rounded-lg absolute -top-5
            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125`}
            onClick={handlePlusClick}
        >
            <PlusIcon size={40}/>
        </button>
    </footer>
  );
};

export default Footer;

const FooterIcon = ({ props, size, onItemClick }) => {
    const { name, value, path, icon: Icon } = props;
    return (
        <NavLink 
            to={path}
            children={({ isActive }) => {
                const iconClasses = isActive ?
                `fill-[#8c4351]` :
                `fill-slate-400`;
                return (
                    <Icon
                        size={size}
                        className={`hover:fill-[#7aa2f7] transition ease-in-out delay-150 
                        hover:-translate-y-1 hover:scale-125 ${iconClasses}`}
                    />
                );
            }}
        />
    );
};