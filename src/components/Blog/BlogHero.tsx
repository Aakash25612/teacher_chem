import React from 'react';

export function BlogHero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-50 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Latest Insights & News
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover the latest trends, insights, and updates from the world of technology and digital innovation.
          </p>
        </div>
      </div>
    </div>
  );
}