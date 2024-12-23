import React from 'react';
import CourseHeader from '../../components/course/CourseHeader';
import CourseFeatures from '../../components/course/CourseFeatures';
import CourseWhyChooseUs from '../../components/course/CourseWhyChooseUs';
import CourseCTA from '../../components/course/CourseCTA';

const features = [
  {
    title: 'NCERT Line by Line Coverage',
    description: 'Our experts teach NCERT line by line, ensuring you grasp every detail.'
  },
  {
    title: 'JEE-Pattern MCQs',
    description: 'Solve high-quality MCQs curated to match the JEE exam pattern, boosting your problem-solving skills.'
  },
  {
    title: 'Previous Year Questions (PYQs)',
    description: 'Practice PYQs to understand the question trends and improve accuracy.'
  },
  {
    title: 'Weekly Tests',
    description: 'Regular assessments to track progress, analyze performance, and refine your preparation.'
  },
  {
    title: 'Expert Faculty',
    description: 'Learn from experienced educators who provide simplified explanations of complex concepts.'
  }
];

const whyChooseUs = [
  'Experienced faculty with proven track record',
  'Regular doubt-clearing sessions',
  'Comprehensive study material',
  'Focus on conceptual understanding'
];

export default function Jee12th() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <CourseHeader
          title="Your Ultimate Destination for"
          subtitle="12th Chemistry Preparation for JEE"
          description="At Decipher Academy, we provide an extensive learning experience to help JEE aspirants excel in Chemistry. Our course covers the entire 12th-grade Chemistry syllabus, ensuring a strong foundation for your success."
        />
        <CourseFeatures features={features} />
        <CourseWhyChooseUs reasons={whyChooseUs} />
        <CourseCTA title="Enroll Now and Master Chemistry for JEE!" />
      </div>
    </div>
  );
}