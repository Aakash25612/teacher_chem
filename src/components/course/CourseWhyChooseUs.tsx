import React from 'react';
import { CheckCircle } from 'lucide-react';

interface CourseWhyChooseUsProps {
  reasons: string[];
}

export default function CourseWhyChooseUs({ reasons }: CourseWhyChooseUsProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
      <div className="space-y-4">
        {reasons.map((reason, index) => (
          <div key={index} className="flex items-start">
            <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
            <p className="ml-4 text-gray-700">{reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
}