import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/about/AboutUs';
import Faculty from '../components/about/Faculty';
import Courses from '../components/Courses';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Faculty />
      <Courses />
      <Testimonials />
      <Contact />
    </>
  );
}