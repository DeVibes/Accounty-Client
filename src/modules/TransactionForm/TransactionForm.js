import React from 'react';
import { useForm } from "react-hook-form";
import { CategoriesArray } from '../../utils/categories';
import { PaymentTypesArray } from '../../utils/paymentTypes';
import { usePostTransaction } from '../TransactionView/hooks/transactions.hook';
import { ErrorMsg } from './ErrorMsg';
import { Input } from './Input';
import { SelectInput } from './SelectInput';
import { SubmitButton } from './SubmitButton';

export const TransactionForm = ({ closePopup }) => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSuccessfulSubmit = () => {
		setTimeout(() => {
			closePopup();
		}, 1500);
	}
	const { postTransaction, isLoading, isSuccess } = usePostTransaction(onSuccessfulSubmit);
	const onSubmit = handleSubmit(postTransaction);
	return (
		<form onSubmit={onSubmit} 
			className={`grid grid-rows-3 grid-cols-2
			gap-4`}
		>
			<div className="col-span-2">
				<Input name="description" register={register} required label="Description"/>
				{errors.description && <ErrorMsg msg="Please enter some description"/>}
			</div>
			<div>
				<Input name="store" register={register} label="Store"/>
			</div>
			<div>
				<SelectInput name="categoryId" register={register} options={CategoriesArray} label="Category"/>
			</div>
			<div>
				<Input name="price" register={register} type="number" required label="Price"/>
				{errors.price && <ErrorMsg msg="Please enter price"/>}
			</div>
			<div>
				<SelectInput name="paymentTypeId" register={register} options={PaymentTypesArray} label="Payment"/>
			</div>
			<div>
				<Input name="date" type='datetime-local' register={register} required label="Date"/>
				{errors.date && <ErrorMsg msg="Please enter date"/>}
			</div>
			<div className="col-span-2 mt-2">
				<SubmitButton state={{ isLoading, isSuccess }}/>
			</div>
		</form>
	);
};

