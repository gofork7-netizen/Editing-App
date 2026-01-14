
import React from 'react';
import { FAQS } from '../constants';

export const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-slate-600 text-lg">Everything you need to know about the editing process and policies.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex justify-between items-center bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <span className="font-bold text-slate-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="p-6 bg-white border-t border-slate-200">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-indigo-50 rounded-3xl border border-indigo-100 text-center">
          <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
          <p className="text-slate-600 mb-8">I'm happy to discuss your specific project needs via email.</p>
          <a href="mailto:hello@elite-editing.com" className="text-indigo-600 font-bold hover:underline">hello@elite-editing.com</a>
        </div>
      </div>
    </div>
  );
};
