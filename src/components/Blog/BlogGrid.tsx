import React from 'react';
import { BlogCard } from './BlogCard';

const posts = [
  {
    title: 'The Future of AI in Web Development',
    excerpt: 'Explore how artificial intelligence is revolutionizing the way we build and maintain websites.',
    date: '2024-03-15',
    author: 'Sarah Johnson',
    category: 'Technology',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Mobile App Development Trends 2024',
    excerpt: 'Stay ahead of the curve with these emerging trends in mobile application development.',
    date: '2024-03-10',
    author: 'Michael Chen',
    category: 'Mobile',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Mastering Social Media Marketing',
    excerpt: 'Learn the essential strategies for building a strong social media presence for your brand.',
    date: '2024-03-05',
    author: 'Emma Wilson',
    category: 'Marketing',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
];

export function BlogGrid() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.title} post={post} />
        ))}
      </div>
    </div>
  );
}