import React from 'react'

export const TransactionLeftData = ({ desc, store }) => {
  return (
    <span className="flex flex-col justify-around ml-3 shrink w-2/3">
      <span className="text-slate-300 truncate">{desc}</span>
      <span className="text-slate-500">{store}</span>
    </span>
  )
}
