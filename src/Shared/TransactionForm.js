import React from 'react';
import { useForm } from "react-hook-form";
import { CategoriesArray } from '../Data/categories';
import { PaymentTypesArray } from '../Data/paymentTypes';

const TransactionForm = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const onSubmit = data => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={`grid grid-rows-3 grid-cols-2
			gap-4`}
		>
			<div className="col-span-2">
				<Input name="description" register={register} required/>
				{errors.description && <ErrorMsg msg="Please enter some description"/>}
			</div>
			<div>
				<Input name="store" register={register}/>
			</div>
			<div>
				<SelectInput name="category" register={register} options={CategoriesArray}/>
			</div>
			<div>
				<Input name="price" register={register} type="number" required/>
				{errors.price && <ErrorMsg msg="Please enter price"/>}
			</div>
			<div>
				<SelectInput name="payment" register={register} options={PaymentTypesArray}/>
			</div>
			<div>
				<Input name="date" type='datetime-local' register={register} required/>
				{errors.date && <ErrorMsg msg="Please enter date"/>}
			</div>
			<div className="col-span-2 mt-2">
				<input type="submit" className={`w-full text-white bg-[#7aa2f7] p-2 rounded-lg cursor-pointer`}
				/>
			</div>
		</form>
	);
};

export default TransactionForm;

const Input = ({ name, register, type = "text", required }) => {
	const inputTitle = name.toUpperCase();
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

const SelectInput = ({ name, register, options }) => {
	const selectTitle = name.toUpperCase();
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