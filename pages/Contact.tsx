
import React from 'react';
import { Button } from '../components/Button';

export const Contact: React.FC = () => {
  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Bio Section */}
            <div className="p-8 lg:p-12 bg-indigo-900 text-white">
              <h1 className="text-3xl font-bold mb-6">Sudip Umesh</h1>
              <p className="text-indigo-200 mb-8 leading-relaxed">
                Professional Academic Editor and Proofreader specializing in high-stakes research manuscripts, PhD theses, and dissertations. 
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-indigo-800 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Email</p>
                    <p className="font-medium">sudip.umesh@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-indigo-800 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Upwork Profile</p>
                    <a 
                      href="https://www.upwork.com/freelancers/~011a9ee20f579628ce" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-medium hover:text-indigo-300 underline underline-offset-4"
                    >
                      View Freelance Portfolio
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-indigo-800">
                <p className="text-sm italic text-indigo-300">
                  "My goal is to protect your unique academic voice while ensuring absolute clarity and style-guide compliance."
                </p>
              </div>
            </div>

            {/* Form Section */}
            <div className="p-8 lg:p-12">
              <h2 className="text-2xl font-bold mb-8 text-slate-900">Direct Message</h2>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Your message has been simulated to sudip.umesh@gmail.com"); }}>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Your Name</label>
                  <input required type="text" className="w-full bg-white border border-slate-300 text-slate-900 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                  <input required type="email" className="w-full bg-white border border-slate-300 text-slate-900 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                  <textarea required rows={5} className="w-full bg-white border border-slate-300 text-slate-900 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Describe your project..."></textarea>
                </div>
                <Button fullWidth size="lg">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
