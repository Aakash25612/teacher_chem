import React from 'react';
import { Link } from 'react-router-dom';

export default function EnrollButton() {
  return (
    <Link 
      to="/contact"
      className="inline-block bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold 
                hover:bg-yellow-400 transition-colors"
    >
      Enroll Now
    </Link>
  );
}