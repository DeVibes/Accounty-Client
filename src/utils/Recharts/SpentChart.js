import React from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'

export const SpentChart = ({ total, spent }) => {
  const chartData = [
    { name: 'spent', value: spent },
    { name: 'left', value: total - spent },
  ]
  return (
    <ResponsiveContainer height="100%" width="100%">
      <PieChart>
        <Pie
          data={[{ name: 'total', value: total }]}
          dataKey="value"
          outerRadius="70%"
          fill="#dd2e2e"
          stroke="none"
        />
        <Pie
          data={chartData}
          dataKey="value"
          outerRadius="100%"
          innerRadius="70%"
          stroke="none"
        >
          <Cell fill="#0088FE" key={0} stroke="white" />
          <Cell fill="#0088FE00" key={1} />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}
