import React from 'react';
import { Clock } from 'lucide-react';

interface CourseHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  showDuration?: boolean;
  duration?: string;
}

export default function CourseHeader({ 
  title, 
  subtitle, 
  description,
  showDuration = false,
  duration = '2 Month'
}: CourseHeaderProps) {
  return (
    <>
      {showDuration && (
        <div className="inline-flex items-center bg-blue-100 text-blue-600 px-3 py-1 rounded-full mb-6">
          <Clock className="w-4 h-4 mr-1" />
          <span className="text-sm font-medium">{duration} Course</span>
        </div>
      )}
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        {title} <span className="text-blue-600">{subtitle}</span>
      </h1>
      <p className="text-lg text-gray-600 mb-8">{description}</p>
    </>
  );
}