import React from 'react';
import { CheckCircle, Clock, Trophy } from 'lucide-react';

export default function CrashCourse() {
  const features = [
    'NCERT Line-by-Line Coverage',
    'PYQ Solving',
    'Regular Tests & Assessments',
    'Expert Faculty'
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-blue-600 text-white rounded-t-lg p-4 inline-flex items-center">
          <Clock className="h-6 w-6 mr-2" />
          <span className="font-semibold">100-Day NEET Crash Course</span>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mt-6 mb-6">
          Accelerate Your NEET Preparation
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          Are you aiming for a top rank in NEET? Our 100-day comprehensive crash course is designed 
          to boost your preparation and ensure success.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h2>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="ml-4 text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center">
          <Trophy className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Join Our 100-Day NEET Crash Course Today!</h3>
          <p className="mb-6">
            Prepare smarter, not harder, and make your NEET dreams a reality.
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