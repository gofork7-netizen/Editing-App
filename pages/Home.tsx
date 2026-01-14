
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { PRICING_PLANS, TESTIMONIALS } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-slate-50 pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-8">
              Academic editing that protects your <span className="text-indigo-600">meaning</span>.
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Thesis, dissertation, journal article, and nonfiction editing with rigorous style-guide control (APA, MLA, Chicago, Harvard, OSCOLA, IEEE) and variant-specific English (UK/US/AU).
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/free-sample">
                <Button size="lg" className="w-full sm:w-auto">Get a free 1,000-word sample</Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">View pricing</Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Background Accent */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-1/2 h-1/2 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-y border-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between gap-8 items-center opacity-70">
            <div className="flex items-center space-x-2 text-slate-600 font-medium">
              <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              <span>Confidential handling</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-600 font-medium">
              <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Style-guide precision</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-600 font-medium">
              <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
              <span>Track Changes included</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-600 font-medium">
              <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Clear turnaround options</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meticulous Academic Services</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Distinct levels of intervention tailored to your manuscript's stage and needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRICING_PLANS.map((service) => (
              <div key={service.id} className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="flex items-center text-xs text-slate-500">
                      <svg className="w-3 h-3 text-indigo-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to={`/services#${service.id}`} className="text-indigo-600 font-bold text-sm flex items-center group-hover:underline">
                  Learn more <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">A simple, transparent process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg">1</div>
              <h4 className="text-xl font-bold mb-3">Upload Sample</h4>
              <p className="text-indigo-200 text-sm leading-relaxed">Send up to 1,000 words for a free evaluation and style-guide check.</p>
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg">2</div>
              <h4 className="text-xl font-bold mb-3">Receive Quote</h4>
              <p className="text-indigo-200 text-sm leading-relaxed">Get a sample edit and a fixed per-word quote based on your text quality.</p>
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg">3</div>
              <h4 className="text-xl font-bold mb-3">Choose Turnaround</h4>
              <p className="text-indigo-200 text-sm leading-relaxed">Select your deadline and confirm the total word count for the project.</p>
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg">4</div>
              <h4 className="text-xl font-bold mb-3">Professional Edit</h4>
              <p className="text-indigo-200 text-sm leading-relaxed">Receive your document with Track Changes and editorial summary on time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What scholars say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="p-8 border border-slate-100 rounded-2xl bg-slate-50 italic">
                <p className="text-slate-700 mb-6 leading-relaxed">"{t.quote}"</p>
                <div className="not-italic">
                  <p className="font-bold text-slate-900">{t.author}</p>
                  <p className="text-sm text-indigo-600">{t.role} • {t.discipline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 italic">Ready to see how your writing will read after professional editing?</h2>
          <Link to="/free-sample">
            <Button size="lg" className="px-12 py-6 text-xl">Upload your free sample</Button>
          </Link>
          <p className="mt-6 text-slate-500">No obligation. Confidentiality guaranteed.</p>
        </div>
      </section>
    </div>
  );
};
