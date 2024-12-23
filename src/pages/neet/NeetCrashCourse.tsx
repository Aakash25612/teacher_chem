import React from 'react';
import CourseLayout from '../../components/course/CourseLayout';

const features = [
  {
    title: 'NCERT Line-by-Line Coverage',
    description: 'We focus on understanding each concept in depth with a line-by-line explanation of the NCERT textbooks, ensuring you don\'t miss any key detail.'
  },
  {
    title: 'PYQ Solving',
    description: 'Past Year Question (PYQ) papers are an integral part of NEET preparation. We solve PYQs systematically to help you understand the exam pattern and improve your problem-solving skills.'
  },
  {
    title: 'Regular Tests & Assessments',
    description: 'Regular mock tests and assessments to track your progress and identify areas of improvement. Stay exam-ready with consistent practice.'
  },
  {
    title: 'Expert Faculty',
    description: 'Learn from the best! Our experienced and dedicated faculty members provide personalized guidance and help you overcome difficult topics.'
  }
];

const whyChooseUs = [
  'Focused, time-bound course structure',
  'Concept clarity and exam-specific preparation',
  'Rigorous practice and performance tracking',
  'High success rate with consistent student results'
];

function NeetCrashCourse() {
  return (
    <CourseLayout
      title="100-Day NEET Crash Course"
      subtitle="at Decipher Academy"
      description="Are you aiming for a top rank in NEET? Decipher Academy is here to help you achieve your dream with our 100-day comprehensive crash course designed to boost your preparation and ensure success."
      features={features}
      whyChooseUs={whyChooseUs}
      ctaTitle="Join Our 100-Day NEET Crash Course Today!"
    />
  );
}

export { NeetCrashCourse };