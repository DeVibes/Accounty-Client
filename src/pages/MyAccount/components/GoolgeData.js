import React from 'react';

export const GoolgeData = ({ name, email }) => (
    <section className="mt-3 flex flex-col gap-2">
        <span className="font-bold text-slate-300 text-xl">User details</span>
        <span className="text-slate-300 text-xs">Full name</span>
        <input
            type="text"
            disabled
            value={name}
            className={`bg-slate-600 border border-gray-600 text-grey-900 text-sm rounded-lg p-2.5`}
        />
        <span className="text-slate-300 text-xs">Email</span>
        <input
            type="text"
            disabled
            value={email}
            className={`bg-slate-600 border border-gray-600 text-grey-900 text-sm rounded-lg p-2.5`}
        />
    </section>
);
