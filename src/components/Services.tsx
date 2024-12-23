import React from 'react';
import { Code, Smartphone, Bot, PenTool, Share2 } from 'lucide-react';

const services = [
  {
    name: 'Web Development',
    description: 'Custom websites and web applications built with cutting-edge technologies.',
    icon: Code,
  },
  {
    name: 'App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: Smartphone,
  },
  {
    name: 'AI Chatbots',
    description: 'Intelligent conversational AI solutions for customer support and engagement.',
    icon: Bot,
  },
  {
    name: 'Content Creation',
    description: 'Engaging digital content that tells your brand story and drives results.',
    icon: PenTool,
  },
  {
    name: 'Social Media Marketing',
    description: 'Strategic social media management to boost your online presence.',
    icon: Share2,
  },
];

export function Services() {
  return (
    <div id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon
                    className="h-5 w-5 flex-none text-blue-600"
                    aria-hidden="true"
                  />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                  <p className="mt-6">
                    <a
                      href={`#${service.name.toLowerCase().replace(' ', '-')}`}
                      className="text-sm font-semibold leading-6 text-blue-600"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}