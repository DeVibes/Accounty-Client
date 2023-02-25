import React, { useEffect } from 'react';
import { Cell, Label, Pie, PieChart, ResponsiveContainer } from 'recharts';

export const CategoryChart = ({ totalSpent, categories, balance }) => {
    const balanceArray = [
        {
            name: 'spent',
            value: totalSpent,
            color: balance < 0 ? '#b91c1c' : '#82ca9d',
        },
        { name: 'left', value: balance, color: 'rgba(0,0,0,0)' },
    ];
    return (
        <ResponsiveContainer height="100%" width="100%">
            <PieChart>
                <Pie
                    data={categories}
                    dataKey="value"
                    innerRadius={90}
                    outerRadius={120}
                    stroke="none"
                >
                    {categories.map((item, index) => (
                        <Cell key={index} fill={item.color} />
                    ))}
                    <Label
                        position="center"
                        content={<PieLable spent={totalSpent} left={balance} />}
                    />
                </Pie>
                <Pie
                    data={balanceArray}
                    dataKey="value"
                    innerRadius={130}
                    outerRadius={140}
                    stroke="none"
                >
                    {balanceArray.map((item, index) => (
                        <Cell key={index} fill={item.color} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};

const PieLable = ({ viewBox, spent, left }) => {
    const { cx, cy } = viewBox;
    return (
        <g>
            <text
                x={cx}
                y={cy}
                textAnchor="middle"
                dominantBaseline="central"
                fontWeight="bold"
            >
                <tspan
                    x={cx}
                    y={cy - 30}
                    fontSize={18}
                    alignmentBaseline="middle"
                    fill="#5A5A66"
                >
                    Total spent
                </tspan>
                <tspan x={cx} y={cy} fontSize={40} fill="#A8A8B3">
                    {spent}₪
                </tspan>
                <tspan
                    x={cx}
                    y={cy + 35}
                    fontSize={16}
                    fill={left < 0 ? '#b91c1c' : '#A8A8B3'}
                >
                    ({left}₪)
                </tspan>
            </text>
        </g>
    );
};
