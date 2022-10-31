import React from 'react';
import { ResponsiveContainer, Legend, PieChart, Pie, Cell } from 'recharts';

export const HalfDonutChart = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie
                    data={data}
                    cy="100%"
                    innerRadius="160%"
                    outerRadius="200%"
                    // paddingAngle={5}
                    dataKey="value"
                    startAngle={180}
                    endAngle={0}
                >
                    {data.map((entry, index) => (
                        <Cell key={index} fill={entry.color}/>
                    ))}
                </Pie>
                <Legend content={<CustomLegendList types={data}/>}/>
                {/* <Legend wrapperStyle={{paddingTop: "5px"}} iconType="circle"/> */}
            </PieChart>
        </ResponsiveContainer>
    );
};

const CustomLegendList = ({ types }) => {
    return (
        <ul className='flex flex-wrap pt-5'>
        {types.map((type, index) => {
            // const style = `bg-[${type.color}] rounded-xl`;
            return <li key={index} className={`p-1 text-white rounded-xl ${type.colorStyle}`}>{type.name}</li>
        })}
        </ul>
    );
};

const CustomLegend = ({ data }) => {
    return (
        <li className=''>

        </li>
    );
};

const RADIAN = Math.PI / 180;
const CustomLabel  = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};