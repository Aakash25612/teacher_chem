import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Stats } from '../components/Stats';
import { Testimonials } from '../components/Testimonials';

export function HomePage() {
  return (
    <main className="pt-16">
      <Hero />
      <Services />
      <Stats />
      <Testimonials />
    </main>
  );
}