import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function JeeChemistry11() {
  const features = [
    'NCERT Line by Line Coverage',
    'JEE-Pattern MCQs',
    'Previous Year Questions (PYQs)',
    'Weekly Tests',
    'Expert Faculty'
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          11th Chemistry Preparation for JEE
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          At Decipher Academy, we provide an extensive learning experience to help JEE aspirants excel in Chemistry. 
          Our course covers the entire 11th-grade Chemistry syllabus, ensuring a strong foundation for your success.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="ml-4 text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Enroll Now and Master Chemistry for JEE!</h3>
          <p className="mb-6">
            At Decipher Academy, we are committed to helping you build a solid foundation and achieve your JEE goals.
          </p>
          <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold 
                           hover:bg-yellow-400 transition-colors">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}