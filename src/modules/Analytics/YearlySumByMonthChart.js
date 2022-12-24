import React from 'react'
import { Bar, BarChart, CartesianGrid, LabelList, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { AnalyticsError } from './components/AnalyticsError';
import { AnalyticsLoader } from './components/AnalyticsLoader';
import { useFetchYearlyTotalByMonth } from './hooks/fetchYearlyTotalByMonth.hook';

export const YearlySumByMonthChart = () => {
  const { data, isLoading, isError } = useFetchYearlyTotalByMonth();

  return (
    <div className='h-2/5 flex flex-col justify-between mt-4'>
      {isLoading ? <AnalyticsLoader/> : 
        isError ? <AnalyticsError/> :(
        <>
          <span className='font-bold text-lg text-slate-300'>
            Yearly sum by month
          </span>
          <div className='bg-slate-700 rounded-xl h-5/6'>
            <ResponsiveContainer height="100%" width="100%">
              <BarChart width="100%" height="100%" data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Bar dataKey="total" fill="#8884d8" isAnimationActive={false}>
                  <LabelList dataKey="total" position="center"/>
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
        )}
    </div>
  )
}