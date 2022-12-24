import React from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { CategoriesMap } from '../../utils/categories';
import { AnalyticsError } from './components/AnalyticsError';
import { AnalyticsLoader } from './components/AnalyticsLoader';
import { useFetchTotalByCategory } from './hooks/fetchTotalByCategory.hook';

export const MonthlyCategoriesChart = () => {
  const { data, isLoading, isError } = useFetchTotalByCategory();

  return (
    <div className='h-2/5 flex flex-col justify-between'>
      {isLoading ? <AnalyticsLoader/> : 
        isError ? <AnalyticsError/> :(
        <>
          <span className='font-bold text-lg text-slate-300'>
            Monthly total by category
          </span>
          <div className='bg-slate-700 rounded-xl h-5/6'>
            <ResponsiveContainer height="100%" width="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  label
                  innerRadius={40}
                  outerRadius={80}
                >
                  {data.map((cat, index) => {
                    return (
                      <Cell key={index} fill={CategoriesMap.get(cat.name).color}/>
                    )
                  })}
                </Pie>
                <Legend 
                  height={40} 
                  verticalAlign='center'
                  layout='vertical' 
                  iconType="star"
                  align='left'
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  )
}