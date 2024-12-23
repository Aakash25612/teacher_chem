import React from 'react';
import { BookOpen, TestTube, Calculator, Award } from 'lucide-react';
import EnrollButton from './EnrollButton';

const courses = [
  {
    title: 'NEET Preparation',
    description: 'Comprehensive medical entrance exam preparation with focus on Chemistry',
    icon: TestTube,
    color: 'text-purple-500'
  },
  {
    title: 'JEE Coaching',
    description: 'Expert Chemistry guidance for engineering aspirants',
    icon: Calculator,
    color: 'text-blue-500'
  },
  {
    title: 'Foundation Courses',
    description: 'Strong Chemistry basics for classes 11th and 12th',
    icon: BookOpen,
    color: 'text-green-500'
  },
  {
    title: 'Test Series',
    description: 'Practice with previous year Chemistry papers',
    icon: Award,
    color: 'text-red-500'
  }
];

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of specialized Chemistry courses designed to help you
            achieve your academic goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {courses.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <course.icon className={`h-12 w-12 ${course.color} mb-4`} />
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <EnrollButton />
        </div>
      </div>
    </section>
  );
}