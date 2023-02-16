import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMsg } from './components/ErrorMsg';
import { Input } from './components/Input';
import { useAddPaymentType } from './hooks/account.hook';

export const PaymentTypeForm = ({ handleClose }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { addPaymentType } = useAddPaymentType();
    const onUpdateClick = async ({ name }) => {
        await addPaymentType(name);
        handleClose();
    };
    const onSubmit = handleSubmit((data) => onUpdateClick(data));
    return (
        <form onSubmit={onSubmit}>
            <Input
                name="name"
                register={register}
                required
                label="Name"
                autoFocus={true}
            />
            {errors.description && (
                <ErrorMsg msg="Please enter new payment type name" />
            )}
            <div className="col-span-2 mt-2">
                <button
                    type="submit"
                    className="rounded-xl bg-[#7aa2f7] w-full h-full"
                >
                    Create
                </button>
            </div>
        </form>
    );
};
