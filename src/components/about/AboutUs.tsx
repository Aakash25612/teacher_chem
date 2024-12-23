import React from 'react';

export default function AboutUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Welcome to <span className="font-semibold">Decipher Academy</span>, the premier destination for Chemistry coaching 
            tailored for NEET and JEE aspirants. We are passionate about empowering students with deep conceptual understanding, 
            enabling them to excel in competitive exams and secure top ranks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              We believe that true learning goes beyond rote memorization. Our mission is to cultivate a 
              <span className="font-semibold"> concept-based learning approach</span>, ensuring that students not only 
              grasp the fundamentals but also develop problem-solving skills that last a lifetime.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What We Offer</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Comprehensive Chemistry coaching for NEET and JEE, covering the entire syllabus for Classes 11th and 12th</li>
              <li>• In-depth focus on NCERT line by line to build a strong foundation</li>
              <li>• Structured practice with NEET/JEE-pattern MCQs, PYQs, and weekly tests</li>
              <li>• Expert faculty dedicated to simplifying complex topics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}