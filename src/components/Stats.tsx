import React from 'react';

const stats = [
  { id: 1, name: 'Projects Completed', value: '70+' },
  { id: 2, name: 'Client Satisfaction', value: '98%' },
  { id: 3, name: 'Team Experts', value: '20+' },
  { id: 4, name: 'Years Experience', value: '3+' },
];

export function Stats() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-teal-500">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-white/80">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}