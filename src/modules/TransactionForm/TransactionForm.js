import React from 'react';
import { useForm } from "react-hook-form";
import Spinner from '../../shared/components/Spinner';
import { CategoriesArray } from '../../utils/categories';
import { PaymentTypesArray } from '../../utils/paymentTypes';
import { ErrorMsg } from './ErrorMsg';
import { Input } from './Input';
import { SelectInput } from './SelectInput';

export const TransactionForm = ({ actions, isLoading }) => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = handleSubmit(actions.postTransaction);
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
				<span className={`w-full text-white p-2 rounded-lg flex justify-center 
					${isLoading ? "bg-slate-400 cursor-progress" : "bg-[#7aa2f7] cursor-pointer"}`}>
					{isLoading ? (
						<Spinner/>
					) : (
						<input type="submit" value="Save" className='cursor-pointer'/>
					)}
				</span>
			</div>
		</form>
	);
};

