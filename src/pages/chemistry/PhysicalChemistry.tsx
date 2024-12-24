import React from 'react';
import CourseLayout from '../../components/course/CourseLayout';

const features = [
  {
    title: 'Complete NCERT Coverage',
    description: 'In-depth study of Physical Chemistry from both 11th and 12th, with our signature approach of teaching every concept through our unique method of teaching NCERT textbook line by line.'
  },
  {
    title: 'Practice MCQs & Past Year Questions',
    description: 'Focus on MCQs and discuss previous NEET/JEE questions for exam readiness.'
  },
  {
    title: 'Weekly Tests',
    description: 'Regular mock tests to refine your skills and time management.'
  },
  {
    title: '4-Month Intensive Course',
    description: 'Comprehensive learning program designed to master Physical Chemistry in 4 months.'
  },
  {
    title: 'Expert Faculty',
    description: 'Learn from experienced educators who simplify complex concepts.'
  }
];

const whyChooseUs = [
  'Experienced faculty with proven track record',
  'Regular doubt-clearing sessions',
  'Comprehensive study material',
  'Focus on NEET/JEE exam pattern and requirements'
];

export default function PhysicalChemistry() {
  return (
    <CourseLayout
      title="Physical Chemistry Batch for"
      subtitle="NEET/JEE"
      description={<>Prepare to ace Physical Chemistry in NEET/JEE with our 4-month course that covers the entire 11th and 12th syllabus, including <span className="text-blue-600 font-bold">line-by-line</span> coverage of the NCERT textbook.</>}
      features={features}
      whyChooseUs={whyChooseUs}
      ctaTitle="Unlock your potential in Physical Chemistry!"
      showDuration={true}
      duration="4 Month"
    />
  );
}