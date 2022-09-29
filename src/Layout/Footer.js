import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoAddOutline as PlusIcon } from 'react-icons/io5';
import { MdOutlineDeleteOutline as DeleteIcon } from 'react-icons/md';
import { GiConfirmed as ConfirmIcon } from 'react-icons/gi';
import { AppPages } from '../Data/pages';
import Feedback from '../Shared/Feedback';
import { FabState } from '../hooks/context.hook';

const footerClasses = `w-full bg-[#24283b] 
    rounded-t-xl p-4 flex justify-around relative`;

const Footer = ({ handlers, states }) => {
    return (
        <footer className={footerClasses}>
            {AppPages.map(pageData => (
                <FooterIcon 
                    props={pageData} 
                    size={30} 
                    key={pageData.value} 
                />
            ))}
            <FAB handlers={handlers}
                fabState={states.fabState}
            />
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

const FAB = ({ handlers, fabState }) => {
    const { handlePlusClick, handleDeleteClick, handleConfirmDeleteClick } = handlers;
    switch (fabState) {
        case FabState.NOT_SELECTED:
            return (
                <button className={`bg-[#7aa2f7] rounded-lg absolute -top-5
                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125`}
                    onClick={handlePlusClick}
                >
                    <PlusIcon size={40}/>
                </button>
            );
        case FabState.DELETE:
            return (
                <button className={`bg-[#8c4351] rounded-lg absolute -top-5
                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125`}
                    onClick={handleDeleteClick}
                >
                    <DeleteIcon size={40}/>
                </button>
            );
        case FabState.CONFIRM_DELETE:
            return (
                <button className={`bg-[#8c4351] rounded-xl absolute -top-5 p-2 text-slate-300
                    scale-125 hover:-translate-y-1 hover:scale-150 flex items-center`} 
                    onClick={handleConfirmDeleteClick}
                >
                    <ConfirmIcon size={20}/>
                    <span className='ml-2'>Confirm</span>
                </button>
            );
        default:
            break;
    }
};