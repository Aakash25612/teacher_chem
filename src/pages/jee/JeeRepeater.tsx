import React from 'react';
import { CheckCircle } from 'lucide-react';
import EnrollButton from '../../components/EnrollButton';

const features = [
  {
    title: 'NCERT Line by Line Coverage',
    description: 'Our approach focuses on NCERT line by line, covering all concepts crucial for JEE success.'
  },
  {
    title: 'JEE-Pattern MCQs',
    description: 'Enhance your preparation with MCQs tailored to the JEE pattern for better accuracy and problem-solving speed.'
  },
  {
    title: 'Previous Year Questions (PYQs)',
    description: 'Solve PYQs to identify important topics, question trends, and strategies for tackling them effectively.'
  },
  {
    title: 'Weekly Tests',
    description: 'Regular assessments to evaluate your performance, identify weak areas, and keep you on track.'
  },
  {
    title: 'Expert Faculty',
    description: 'Learn from experienced educators who break down complex topics and offer personalized guidance.'
  }
];

const whyChooseUs = [
  'Experienced faculty with proven track record',
  'Regular doubt-clearing sessions',
  'Comprehensive study material',
  'Focus on conceptual understanding',
  'Personalized attention and guidance'
];

export default function JeeRepeater() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Your Ultimate Destination for Complete <span className="text-blue-600">11th & 12th Chemistry</span> Preparation for JEE Repeater Batch
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          At <span className="font-semibold">Decipher Academy</span>, our specially designed repeater batch ensures an intensive 
          focus on the <span className="font-semibold">entire 11th and 12th Chemistry syllabus</span> to give you an edge in JEE.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Features</h2>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
          <div className="space-y-4">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="ml-4 text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Enroll Now and Excel in Chemistry for JEE!</h3>
          <p className="mb-6">
            At <span className="font-semibold">Decipher Academy</span>, we are committed to helping you secure your dream 
            engineering college. Join our repeater batch and achieve top results in JEE!
          </p>
          <EnrollButton />
        </div>
      </div>
    </div>
  );
}