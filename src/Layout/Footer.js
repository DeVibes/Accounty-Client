import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppPages } from '../Data/pages';

const footerClasses = `absolute bottom-0 w-full bg-[#24283b] 
    rounded-xl p-4 flex justify-around`;

const Footer = () => {
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
                        className={`hover:fill-[#7aa2f7] ${iconClasses}`}
                    />
                );
            }}
        />
    );
};