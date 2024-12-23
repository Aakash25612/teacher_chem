import React from 'react';
import { Quote, User } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    text: 'The personalized attention and structured approach helped me crack NEET in my first attempt.',
    achievement: 'NEET AIR under 1000'
  },
  {
    name: 'Rahul Verma',
    text: 'Outstanding faculty and study material. Made JEE preparation much more manageable.',
    achievement: 'JEE Advanced AIR under 5000'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our students who achieved their dreams with our guidance
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-blue-200" />
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-blue-600">{testimonial.achievement}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}