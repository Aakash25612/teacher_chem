import React from 'react';
import { AboutHero } from '../components/AboutUs/AboutHero';
import { ServiceHighlights } from '../components/AboutUs/ServiceHighlights';
import { WhyChooseUs } from '../components/AboutUs/WhyChooseUs';

export function AboutPage() {
  return (
    <div className="bg-white pt-16">
      <AboutHero />
      <ServiceHighlights />
      <WhyChooseUs />
    </div>
  );
}