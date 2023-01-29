import React from 'react'

export const TransactionListLoader = () => {
  return (
    <ul className="animate-pulse">
      {Array.from(Array(10)).map((i, index) => (
        <li className="flex my-2" key={index}>
          <svg
            className="mr-2 w-14 h-14 text-gray-200 dark:text-gray-700"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            ></path>
          </svg>
          <div className="flex flex-col flex-1 justify-around">
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-1/4"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-1/2"></div>
          </div>
          <div className="flex flex-col w-1/5 justify-around items-end">
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-1/2"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-2/3"></div>
          </div>
        </li>
      ))}
    </ul>
  )
}
