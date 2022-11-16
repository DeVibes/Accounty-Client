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
	const { register, handleSubmit, formState: { errors }, reset } = useForm({
		defaultValues: {
			categoryId: "",
			paymentTypeId: ""
		}
	});
	const updateCategoryDefault = () => reset({ categoryId: categories[0]?.id });
	const updatePaymentDefault = () => reset({ paymentTypeId: paymentTypes[0]?.id });
	const { categories, isLoading: isCatLoading, isError: isCatError } 
		= useFetchCategories(updateCategoryDefault);
	const { paymentTypes, isLoading: isPayLoading, isError: isPayError } 
		= useFetchPaymentTypes(updatePaymentDefault);
	const isFormLoading = isCatLoading || isPayLoading;
	const isFormError = isCatError || isPayError;
	const onSuccessfulSubmit = () => {
		setTimeout(() => {
			queryReset();
			closePopup();
		}, MODAL_TIMEOUT);
		reset();
	}
	const { postTransaction, isLoading: isPostLoading, isSuccess: isPostSuccess, reset: queryReset } 
		= usePostTransaction(onSuccessfulSubmit);
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
				<SubmitButton buttonState={{ isPostLoading, isPostSuccess, isFormError, isFormLoading }}/>
			</div>
		</form>
	);
};

const MODAL_TIMEOUT = 1000;