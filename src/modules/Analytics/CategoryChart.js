import React from 'react';
import { Cell, Label, Pie, PieChart, ResponsiveContainer } from 'recharts';

export const CategoryChart = () => {
    return (
        <>
            <ResponsiveContainer height="100%" width="100%">
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        innerRadius={90}
                        outerRadius={120}
                        stroke="none"
                    >
                        {data.map((item, index) => (
                            <Cell key={index} fill={item.fill} />
                        ))}
                        <Label
                            fontSize={50}
                            content={<PieLable />}
                            position={['50%', '50%']}
                            value="test"
                        />
                    </Pie>
                    <Pie
                        data={data2}
                        dataKey="value"
                        innerRadius={130}
                        outerRadius={140}
                        stroke="none"
                    >
                        {data2.map((item, index) => (
                            <Cell key={index} fill={item.fill} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <section className="flex flex-nowrap overflow-x-scroll gap-3 h-20">
                <span className="bg-gray-500 rounded-lg p-2 whitespace-nowrap flex justify-center gap-2 items-center">
                    <span className="bg-[#fb4934] w-6 h-6 inline-block rounded-md" />
                    <span>Category1 </span>
                    <span>400</span>
                </span>
                <span className="bg-gray-500 rounded-lg p-2 whitespace-nowrap flex justify-center gap-2 items-center">
                    <span className="bg-[#9d00ff] w-6 h-6 inline-block rounded-md" />
                    <span>Category2 </span>
                    <span>300</span>
                </span>
                <span className="bg-gray-500 rounded-lg p-2 whitespace-nowrap flex justify-center gap-2 items-center">
                    <span className="bg-[#b8bb26] w-6 h-6 inline-block rounded-md" />
                    <span>Category3 </span>
                    <span>300</span>
                </span>
                <span className="bg-gray-500 rounded-lg p-2 whitespace-nowrap flex justify-center gap-2 items-center">
                    <span className="bg-[#83a598] w-6 h-6 inline-block rounded-md" />
                    <span>Category4 </span>
                    <span>200</span>
                </span>
            </section>
        </>
    );
};

const PieLable = ({ viewBox, value }) => {
    const { cx, cy } = viewBox;
    const textValue = 'Custom Label';
    const spans = textValue.split(' ');
    return (
        <g>
            <text
                x={cx}
                y={cy}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={24}
                fontWeight="bold"
            >
                {spans.map((span, index) => (
                    <tspan
                        key={index}
                        x={cx}
                        dy={index === 0 ? '0em' : '1.2em'}
                    >
                        {span}
                    </tspan>
                ))}
            </text>
        </g>
    );
};

const data = [
    { name: 'Group A', value: 400, fill: '#fb4934' },
    { name: 'Group B', value: 300, fill: '#9d00ff' },
    { name: 'Group C', value: 300, fill: '#b8bb26' },
    { name: 'Group D', value: 200, fill: '#83a598' },
];

const data2 = [
    { name: 'Test', value: 15000, fill: '#82ca9d' },
    { name: 'Test2', value: 8000, fill: 'rgba(0,0,0,0)' },
];
