import React from 'react'
import { HalfDonutChart } from '../../utils/Recharts/HalfDonutChart';

export const BalanceView = () => {
    return (
        <section className='container p-4 pb-0 h-64 relative'>
            <HalfDonutChart data={data}/>
            <section 
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 flex flex-col items-center'
            >
                <span className="text-lg text-gray-300 mt-5">
                   Monthly balance 
                </span>
                <span className="text-2xl text-white">
                    8000₪
                </span>
            </section>
        </section>
    );
};

const data = [
  { name: "Group A", value: 400, color: "#dd2e2e", colorStyle: "bg-red-600" },
  { name: "Group B", value: 300, color: "#00C49F", colorStyle: "bg-green-600" },
  { name: "Group C", value: 300, color: "#FFBB28", colorStyle: "bg-red-600" },
  { name: "Group D", value: 200, color: "#0088FE", colorStyle: "bg-red-600" },
  { name: "Group E", value: 200, color: "#00C8FE", colorStyle: "bg-red-600" }
];