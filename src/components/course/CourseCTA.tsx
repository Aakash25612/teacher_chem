import React from 'react';
import EnrollButton from '../EnrollButton';

interface CourseCTAProps {
  title: string;
}

export default function CourseCTA({ title }: CourseCTAProps) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="mb-6">
        At <span className="font-semibold">Decipher Academy</span>, we are committed to helping you achieve your goals.
      </p>
      <EnrollButton />
    </div>
  );
}