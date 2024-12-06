import React from 'react';
import { Check } from 'lucide-react';

export default function ProductDetails() {
  const specifications = [
    { label: 'Brand', value: 'Premium Audio' },
    { label: 'Model', value: 'WH-1000XM4' },
    { label: 'Color', value: 'Black' },
    { label: 'Battery Life', value: 'Up to 30 hours' },
    { label: 'Noise Cancelling', value: 'Active Noise Cancellation' },
    { label: 'Connectivity', value: 'Bluetooth 5.0' },
    { label: 'Weight', value: '254g' },
  ];

  const features = [
    'Industry-leading noise cancellation',
    'Exceptional sound quality with 40mm drivers',
    'Multipoint pairing with two Bluetooth devices',
    'Touch sensor controls for easy operation',
    'Speak-to-chat technology automatically reduces volume during conversations',
    'Quick charging - 5 hours of playback from 10 minutes charge',
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900">Product Details</h2>
      
      {/* Key Features */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technical Specifications */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Specifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {specifications.map(({ label, value }, index) => (
            <div key={index} className="flex items-start">
              <dt className="w-24 flex-shrink-0 text-gray-500">{label}:</dt>
              <dd className="text-gray-900">{value}</dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}