import React from 'react';
import CourseLayout from '../../components/course/CourseLayout';

const features = [
  {
    title: 'NCERT Line by Line Coverage',
    description: 'We teach NCERT line by line, ensuring an in-depth understanding of every detail essential for NEET success.'
  },
  {
    title: 'NEET-Pattern MCQs',
    description: 'Sharpen your skills with high-quality MCQs designed to match the NEET exam pattern, building accuracy and speed.'
  },
  {
    title: 'Previous Year Questions (PYQs)',
    description: 'Gain insights into NEET trends by practicing PYQs to tackle questions with confidence.'
  },
  {
    title: 'Weekly Tests',
    description: 'Regular evaluations to monitor your progress, identify weak areas, and ensure consistent improvement.'
  },
  {
    title: 'Expert Faculty',
    description: 'Learn from dedicated educators who simplify complex concepts and provide personalized guidance.'
  }
];

const whyChooseUs = [
  'Experienced faculty with proven track record',
  'Regular doubt-clearing sessions',
  'Comprehensive study material',
  'Focus on conceptual understanding',
  'Personalized attention'
];

export default function NeetRepeater() {
  return (
    <CourseLayout
      title="Score"
      subtitle="180/180 in Chemistry with Our NEET Repeater Batch!"
      description="At Decipher Academy, our NEET Repeater Batch is meticulously designed to help you achieve a perfect 180/180 in Chemistry. Covering the entire 11th and 12th-grade Chemistry syllabus, we ensure that every concept is mastered with precision."
      features={features}
      whyChooseUs={whyChooseUs}
      ctaTitle="Enroll Now and Ace NEET Chemistry with 180/180!"
    />
  );
}