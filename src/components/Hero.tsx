import React from 'react';
import { ArrowRight } from 'lucide-react';
import EnrollButton from './EnrollButton';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/chem.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Master JEE and NEET Chemistry <br />
          <span className="text-yellow-400">Smarter, Faster, Better!</span>
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Expert guidance for NEET & JEE preparation with personalized learning paths
          and comprehensive study materials.
        </p>
        <EnrollButton />
      </div>
    </div>
  );
}
