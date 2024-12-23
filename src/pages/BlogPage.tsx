import React from 'react';
import { BlogHero } from '../components/Blog/BlogHero';
import { BlogGrid } from '../components/Blog/BlogGrid';

export function BlogPage() {
  return (
    <div className="bg-white pt-16">
      <BlogHero />
      <BlogGrid />
    </div>
  );
}