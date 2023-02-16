import React from 'react';
import { useAuth } from '../../modules/LoginView/hook/auth.hook';
import { PrivateRouteHOC } from '../../modules/Router/components/PrivateRouteHOC';
import { ProfilePic } from '../../shared/components/ProfilePic';
import { useUserDataStore } from '../../shared/state/userDataStore';
import { DeleteIcon, LogoutIcon, PlusIcon } from '../../utils/icons';
import { GoolgeData } from './components/GoolgeData';
import {
    useAccountHook,
    useDeletePaymentType,
} from '../../modules/TransactionForm/hooks/account.hook';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useModalStore } from '../../modules/Modal/state/modalStore';

export const MyAccount = () => {
    const { isLoading, handleLogout } = useAuth();
    const { picUrl, name, email } = useUserDataStore((state) => ({
        picUrl: state.picUrl,
        name: state.name,
        email: state.email,
    }));
    return (
        <PrivateRouteHOC>
            <section className="flex justify-center">
                <ProfilePic size={96} isLoading={isLoading} picUrl={picUrl} />
            </section>
            <GoolgeData name={name} email={email} />
            <PaymentTypes />
            <section className="flex justify-end mt-4">
                <button
                    className="bg-red-800 rounded-xl p-2 flex justify-center items-center gap-2 cursor-pointer"
                    onClick={handleLogout}
                >
                    <LogoutIcon size={20} className="text-slate-200" />
                    <span className="text-slate-200">Logout</span>
                </button>
            </section>
        </PrivateRouteHOC>
    );
};

const PaymentTypes = () => {
    const { data, isLoading, isError } = useAccountHook();
    const [selectedPaymentType, setSelectedPaymentType] = useState(undefined);
    const { deletePaymentType } = useDeletePaymentType();
    const openAddPaymentType = useModalStore(
        (state) => state.openAddPaymentType
    );
    return (
        <section className="mt-4">
            <span className="font-bold text-slate-300 text-xl">
                Payment types
            </span>
            {!(isLoading || isError) && (
                <div className="flex mt-2 flex-wrap">
                    {data.accountPaymentTypes.map((type, index) => (
                        <PaymentTypeItem
                            type={type}
                            key={index}
                            selectedPaymentType={selectedPaymentType}
                            selectType={() => setSelectedPaymentType(type)}
                            handleDelete={deletePaymentType}
                        />
                    ))}
                    <div
                        className="border border-slate-400 rounded-lg mx-2 my-1 h-28 w-28 flex justify-center items-center"
                        onClick={openAddPaymentType}
                    >
                        <PlusIcon size={60} color="grey" />
                    </div>
                </div>
            )}
        </section>
    );
};

const PaymentTypeItem = ({
    type,
    index,
    selectedPaymentType,
    selectType,
    handleDelete,
}) => {
    const isSelected = selectedPaymentType === type;
    const [isConfirmDelete, setIsConfirmDelete] = useState(false);
    const handleClick = (e) => {
        e.stopPropagation();
        if (isConfirmDelete) handleDelete(type);
        else setIsConfirmDelete(true);
    };
    return (
        <div
            className="border border-slate-400 rounded-lg mx-2 my-1 h-28 w-28 flex flex-col"
            onClick={selectType}
        >
            <span className="text-2xl text-slate-400 p-2">{type}</span>
            {isSelected && (
                <motion.span
                    initial={{ y: -50 }}
                    animate={isSelected ? { y: 0 } : { y: -50 }}
                    className="grow"
                >
                    <span
                        className="bg-red-600 rounded-b-lg px-3 flex justify-center items-center cursor-pointer h-full"
                        onClick={handleClick}
                    >
                        <>
                            {isConfirmDelete ? (
                                <span className="text-lg">Confirm?</span>
                            ) : (
                                <DeleteIcon size={30} />
                            )}
                        </>
                    </span>
                </motion.span>
            )}
        </div>
    );
};
