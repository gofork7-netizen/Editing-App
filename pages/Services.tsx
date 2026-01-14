
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { PRICING_PLANS } from '../constants';

export const Services: React.FC = () => {
  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Editing and proofreading services</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            I offer distinct levels of intervention for academic writing. Not sure which one you need? I will recommend the right service level after reviewing your free sample.
          </p>
        </div>

        <div className="space-y-12">
          {PRICING_PLANS.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-2/5 relative">
                <img 
                  src={`https://picsum.photos/seed/${service.id}/800/600`} 
                  alt={service.name} 
                  className="w-full h-full object-cover grayscale opacity-80"
                />
                <div className="absolute inset-0 bg-indigo-900/10"></div>
              </div>
              <div className="lg:w-3/5 p-8 lg:p-16 flex flex-col justify-center">
                <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs mb-4">Service Level 0{index + 1}</span>
                <h2 className="text-3xl font-bold mb-6">{service.name}</h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  {service.description} This service includes a comprehensive review of your manuscript tailored to this specific depth of intervention.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-slate-700">
                      <svg className="w-5 h-5 text-indigo-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {feature}
                    </div>
                  ))}
                </div>
                <div>
                  <Link to="/free-sample">
                    <Button>Get a Quote</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="mt-24 bg-indigo-600 rounded-3xl p-12 lg:p-20 text-center text-white">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8 italic">Not sure what your manuscript needs?</h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Upload 1,000 words for free. I'll provide a sample edit and tell you exactly which service level is appropriate for your current draft.
          </p>
          <Link to="/free-sample">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-slate-100">Get Free Sample Edit</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
