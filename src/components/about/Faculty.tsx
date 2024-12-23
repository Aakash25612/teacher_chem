import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';

export default function Faculty() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Faculty</h2>
          
          <div className="flex flex-col items-center mb-8">
            <div className="w-48 h-48 mb-6 rounded-full overflow-hidden">
              <img 
                src="/gurmeet-sir.jpg" 
                alt="Gurmeet Sir"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Meet Gurmeet Sir</h3>
          </div>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            With <span className="font-semibold">15 years of experience</span> in teaching Chemistry, 
            Gurmeet Sir is the backbone of Decipher Academy. Having worked with prestigious institutes 
            like <span className="font-semibold">Allen Kota</span> and <span className="font-semibold">Resonance Kota</span>, 
            he has played a pivotal role in shaping the success stories of countless NEET and JEE toppers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-4">Track Record</h4>
            <p className="text-gray-600">
              Numerous top ranks in both NEET and JEE over the years, demonstrating consistent excellence in teaching.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-4">Teaching Philosophy</h4>
            <p className="text-gray-600">
              Focuses on concept-based learning and avoids rote memorization, empowering students with deep understanding.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-4">Student Success</h4>
            <p className="text-gray-600">
              Dedicated to helping every student unlock their true potential and achieve their academic goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}