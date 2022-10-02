import React from 'react';
import { useForm } from "react-hook-form";
import { CategoriesArray } from '../../utils/categories';
import { PaymentTypesArray } from '../../utils/paymentTypes';

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
				{isLoading ? (
					<>LOADING</>
				) : (
					<input type="submit" className={`w-full text-white bg-[#7aa2f7] p-2 rounded-lg cursor-pointer`}/>
				)}
			</div>
		</form>
	);
};

const Input = ({ name, register, type = "text", required, label }) => {
	const inputTitle = label.toUpperCase();
	return (
		<>
			<label htmlFor={name} className='block mb-2 text-sm font-medium text-slate-400'>
				{inputTitle}
			</label>
			<input type={type} id={name}
				className={`bg-slate-600 border border-gray-600 text-grey-900 text-sm rounded-lg
				focus:ring-blue-500 dark:focus:border-blue-500 block w-full p-2.5 dark:text-white`}
				{...register(name, { required })}
			/>
		</>
	);
};

const SelectInput = ({ name, register, options, label }) => {
	const selectTitle = label.toUpperCase();
	return (
		<>
			<label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-400">
				{selectTitle}
			</label>
			<select id={name} className={`bg-slate-600 border border-gray-600 text-sm rounded-lg
			 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-white`} 
			 	{...register(name)}
			>
				{options.length > 0 && options.map((option, index) => (
					<option key={index} value={option.id}>{option.name}</option>
				))}
			</select>
		</>
	);
};

// const ToggleInput = ({ name, register }) => {
// 	const toggleTitle = name.toUpperCase();
// 	return (
// 		<>
// 			{/* <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-400">
// 				{toggleTitle}
// 			</label> */}
// 			<input type="checkbox" id={name} className={`sr-only peer`}/>
// 			<span></span>
// 		</>
// 	);
// };


const ErrorMsg = ({ msg }) => (
	<p className="mt-2 text-sm text-red-400">
		<span className="font-medium">
			{msg}
		</span>
	</p>
);