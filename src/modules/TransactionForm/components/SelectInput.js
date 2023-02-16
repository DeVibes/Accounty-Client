import React from 'react';

export const SelectInput = ({ name, register, options, label, isLoading }) => {
    const selectTitle = label.toUpperCase();
    return (
        <>
            <label
                htmlFor={name}
                className="block mb-2 text-sm font-medium text-gray-400"
            >
                {selectTitle}
            </label>
            <select
                id={name}
                className={`bg-slate-600 border border-gray-600 text-sm rounded-lg
			 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-white`}
                {...register(name)}
                disabled={isLoading}
            >
                {isLoading && <option>Loading ...</option>}
                {options?.length > 0 &&
                    options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
            </select>
        </>
    );
};
