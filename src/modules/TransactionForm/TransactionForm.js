import React from 'react';
import { useForm } from "react-hook-form";
import { usePostTransaction } from '../TransactionView/hooks/transactions.hook';
import { ErrorMsg } from './components/ErrorMsg';
import { Input } from './components/Input';
import { SelectInput } from './components/SelectInput';
import { SubmitButton } from './components/SubmitButton';
import { useFetchCategories } from './hooks/categories.hook';
import { useFetchPaymentTypes } from './hooks/payments.hook';

export const TransactionForm = ({ closePopup }) => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSuccessfulSubmit = () => {
		setTimeout(() => {
			closePopup();
		}, 1500);
	}
	const { postTransaction, isLoading, isSuccess } = usePostTransaction(onSuccessfulSubmit);
	const onSubmit = handleSubmit(postTransaction);
	const { categories, isLoading: isCatLoading } = useFetchCategories();
	const { paymentTypes, isLoading: isPayLoading } = useFetchPaymentTypes();
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
				<SelectInput name="categoryId" register={register} options={categories} label="Category" isLoading={isCatLoading}/>
			</div>
			<div>
				<Input name="price" register={register} type="number" required label="Price"/>
				{errors.price && <ErrorMsg msg="Please enter price"/>}
			</div>
			<div>
				<SelectInput name="paymentTypeId" register={register} options={paymentTypes} label="Payment" isLoading={isPayLoading}/>
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

