import React from 'react';
import { Smartphone, Globe, Box, Share2, Search } from 'lucide-react';

const services = [
  {
    name: 'App Development',
    description: 'We create intuitive, scalable, and user-focused mobile applications that align with your business goals and delight your audience.',
    icon: Smartphone,
  },
  {
    name: 'Web Development',
    description: 'Your website is your digital storefront. We design responsive, visually appealing, and functionally robust websites that leave a lasting impression.',
    icon: Globe,
  },
  {
    name: '3D Animation',
    description: 'Our animations bring imagination to life with captivating visuals that add depth, creativity, and innovation to your projects.',
    icon: Box,
  },
  {
    name: 'Social Media Marketing',
    description: 'We help you build and grow your online presence with impactful campaigns, engaging content, and audience-first strategies.',
    icon: Share2,
  },
  {
    name: 'Digital Marketing & SEO',
    description: 'From driving qualified traffic to optimizing your search engine rankings, we provide data-driven marketing solutions to grow your brand.',
    icon: Search,
  },
];

export function ServiceHighlights() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What We Do Best
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}