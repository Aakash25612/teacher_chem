import React from 'react';
import { CheckCircle } from 'lucide-react';
import EnrollButton from '../EnrollButton';
import CourseHeader from './CourseHeader';
import CourseFeatures from './CourseFeatures';
import CourseWhyChooseUs from './CourseWhyChooseUs';

interface Feature {
  title: string;
  description: string;
}

interface CourseLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  whyChooseUs: string[];
  ctaTitle: string;
  showDuration?: boolean;
  duration?: string;
}

export default function CourseLayout({
  title,
  subtitle,
  description,
  features,
  whyChooseUs,
  ctaTitle,
  showDuration = false,
  duration
}: CourseLayoutProps) {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <CourseHeader 
          title={title}
          subtitle={subtitle}
          description={description}
          showDuration={showDuration}
          duration={duration}
        />

        <CourseFeatures features={features} />
        
        <CourseWhyChooseUs reasons={whyChooseUs} />

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">{ctaTitle}</h3>
          <p className="mb-6">
            At <span className="font-semibold">Decipher Academy</span>, we are committed to helping you achieve your goals.
          </p>
          <EnrollButton />
        </div>
      </div>
    </div>
  );
}