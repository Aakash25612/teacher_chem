import React from 'react';
import { TestimonialCard } from './TestimonialCard';

const testimonials = [
  {
    name: 'Mohammad Bin Saheed',
    role: 'CEO, MyInvite',
    content: 'AR Vision transformed our digital presence completely. Their team\'s expertise in web development and AI integration helped us achieve a 200% increase in user engagement.'
  },
  {
    name: 'Sushil Lunia',
    role: 'Senior Manager, Pioneer Holding',
    content: 'The mobile app developed by AR Vision exceeded our expectations. Their attention to detail and innovative approach helped us secure multiple industry awards.'
  },
  {
    name: 'Sanskar Goel',
    role: 'ASM, Pidilite',
    content: 'Working with AR Vision on our social media strategy was a game-changer. Their data-driven approach helped us increase our ROI by 30% within six months.'
  }
];

export function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See what our clients say about working with AR Vision
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}