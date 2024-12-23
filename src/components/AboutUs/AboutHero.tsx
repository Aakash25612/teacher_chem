import React from 'react';
import { Rocket } from 'lucide-react';

export function AboutHero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-50 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Welcome to AR Vision Technology
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are redefining the digital landscape by turning visionary ideas into groundbreaking solutions. Our mission is simple yet powerful: to empower businesses with a harmonious blend of creativity, cutting-edge technology, and strategic innovation.
          </p>
        </div>
      </div>
    </div>
  );
}