import React from 'react';
import { Droplet, Clock, Zap } from 'lucide-react';

const features = [
  {
    icon: <Droplet className="h-8 w-8 text-blue-400" />,
    title: 'Gravity-Powered',
    description: 'Harness the power of gravity for a smooth, controlled pour every time.',
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-400" />,
    title: 'Time-Released Flavor',
    description: 'Experience a cascade of flavors as your beverage flows through the device.',
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-400" />,
    title: 'Instant Cooling',
    description: 'Built-in cooling technology for the perfect temperature with every sip.',
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose GravityFlow?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-white">{feature.title}</h3>
              <p className="text-gray-300 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;