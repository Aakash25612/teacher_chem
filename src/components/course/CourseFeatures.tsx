import React from 'react';
import { CheckCircle } from 'lucide-react';
import { formatNCERTText } from '../../utils/formatDescription';

export interface Feature {
  title: string;
  description: string | JSX.Element;
}

interface CourseFeaturesProps {
  features: Feature[];
}

export default function CourseFeatures({ features }: CourseFeaturesProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Features</h2>
      <div className="space-y-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
            <div className="ml-4">
              <h3 className="font-semibold text-gray-900">{feature.title}</h3>
              <div className="text-gray-600">
                {typeof feature.description === 'string' 
                  ? formatNCERTText(feature.description)
                  : feature.description
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}