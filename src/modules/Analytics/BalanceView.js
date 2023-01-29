import React, { useEffect } from 'react'
import { IncomeLabel, OutcomeLabel } from '../../utils/icons'
import { useFetchBalance } from './hooks/fetchBalance.hook'
import { AnalyticsLoader } from './components/AnalyticsLoader'
import { AnalyticsError } from './components/AnalyticsError'

export const BalanceView = () => {
  const { income, outcomes, balance, isLoading, isError } = useFetchBalance()
  return (
    <section className="flex flex-col h-1/4">
      {isLoading ? (
        <AnalyticsLoader />
      ) : isError ? (
        <AnalyticsError />
      ) : (
        <>
          <span className="font-bold text-lg text-slate-300 mb-2">
            My Balance
          </span>
          <div className="bg-slate-800 h-5/6 rounded-xl flex flex-col">
            <span className="text-gray-200 text-4xl text-center py-6">
              {balance} ₪
            </span>
            <div className="w-full flex mb-2">
              <div className="w-full text-center flex justify-center items-center border-r-2 border-slate-500">
                <IncomeLabel size={30} className="text-white" />
                <div className="pl-3">
                  <span className="text-slate-500 text-sm block">Income</span>
                  <span className="text-slate-200 text-xl">{income}₪</span>
                </div>
              </div>
              <div className="w-full text-center flex justify-center items-center">
                <OutcomeLabel size={30} className="text-white" />
                <div className="pl-3">
                  <span className="text-slate-500 text-sm block">Outcomes</span>
                  <span className="text-slate-200 text-xl">{outcomes}₪</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  )
}
