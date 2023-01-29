import React from 'react'

export const Input = ({ name, register, type = 'text', required, label }) => {
  const inputTitle = label.toUpperCase()
  return (
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-slate-400"
      >
        {inputTitle}
      </label>
      <input
        type={type}
        id={name}
        className={`bg-slate-600 border border-gray-600 text-grey-900 text-sm rounded-lg
				focus:ring-blue-500 dark:focus:border-blue-500 block w-full p-2.5 dark:text-white`}
        {...register(name, { required })}
      />
    </>
  )
}
