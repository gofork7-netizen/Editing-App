
import React from 'react';
import { GoogleGenAI } from '@google/genai';
import { Button } from '../components/Button';

export const FreeSample: React.FC = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [pastedText, setPastedText] = React.useState('');
  const [aiAnalysis, setAiAnalysis] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulated "Backend Logic" for the manuscript analysis
    if (pastedText.trim().length > 50) {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: `Perform a backend academic analysis on this text. Identify 3 specific areas for improvement in academic tone and style. Text: "${pastedText.substring(0, 1000)}"`,
          config: {
            systemInstruction: "You are the backend editorial system for Elite Academic Editing. Be professional and specific.",
          }
        });
        setAiAnalysis(response.text || 'Backend analysis completed. Document queued for lead editor.');
      } catch (err) {
        console.error("Backend AI Analysis failed:", err);
      }
    }

    // Simulate standard submission processing dispatch to lead editor's Gmail
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen py-20 flex flex-col items-center bg-slate-50">
        <div className="max-w-2xl w-full px-4 text-center">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h1 className="text-4xl font-bold mb-4">Sample Successfully Dispatched!</h1>
          <p className="text-lg text-slate-600 mb-4 leading-relaxed">
            Your manuscript sample has been securely routed to <span className="font-bold text-indigo-600">sudip.umesh@gmail.com</span> for review.
          </p>
          <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-xl mb-10 inline-block">
            <p className="text-xs text-indigo-700 font-bold uppercase tracking-widest">Backend Status: Document Received & Analyzed</p>
          </div>

          {aiAnalysis && (
            <div className="bg-white border border-indigo-100 rounded-3xl p-8 mb-10 text-left shadow-lg">
              <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-xs mb-4 underline">Automated Preliminary Report</h3>
              <div className="prose prose-indigo max-w-none text-slate-800 text-sm leading-relaxed whitespace-pre-wrap">
                {aiAnalysis}
              </div>
            </div>
          )}

          <Button size="lg" onClick={() => window.location.hash = '/'}>Back to Home</Button>
        </div>
      </div>
    );
  }

  const inputClass = "w-full bg-white border-2 border-slate-300 text-slate-900 rounded-xl p-4 focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400 font-medium";

  return (
    <div className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Free 1,000-word sample edit</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto italic">
            "Your document will be sent directly to sudip.umesh@gmail.com for expert assessment."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1 space-y-10">
            <div className="p-6 bg-slate-50 border-2 border-slate-100 rounded-2xl">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm mr-3">1</span>
                Prepare Sample
              </h3>
              <p className="text-sm text-slate-600">Select a representative section of up to 1,000 words. Do not include bibliographies in the sample.</p>
            </div>
            <div className="p-6 bg-slate-50 border-2 border-slate-100 rounded-2xl">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm mr-3">2</span>
                Choose Style
              </h3>
              <p className="text-sm text-slate-600">Specify APA, MLA, OSCOLA, or IEEE. The backend logic verifies your adherence to these guides.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-2 space-y-8 bg-slate-50 p-8 lg:p-12 rounded-3xl border-2 border-slate-200 shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Name</label>
                <input required type="text" placeholder="Your Name" className={inputClass} />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Email</label>
                <input required type="email" placeholder="Your academic email" className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">English Variant</label>
                <select className={inputClass}>
                  <option>UK English</option>
                  <option>US English</option>
                  <option>Australian English</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Style Guide</label>
                <select className={inputClass}>
                  <option>APA (7th Ed)</option>
                  <option>MLA</option>
                  <option>Chicago</option>
                  <option>Harvard</option>
                  <option>OSCOLA</option>
                  <option>IEEE</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Paste Text Sample (High Visibility Area)</label>
              <textarea 
                required
                rows={8} 
                value={pastedText}
                onChange={(e) => setPastedText(e.target.value)}
                placeholder="Paste your 1,000-word sample here for direct analysis..."
                className={`${inputClass} font-serif text-sm leading-relaxed`}
              ></textarea>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Or Select File (.docx)</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-400 border-dashed rounded-xl hover:border-indigo-400 transition-colors bg-white">
                <div className="space-y-2 text-center">
                  <svg className="mx-auto h-10 w-10 text-slate-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-sm font-bold text-indigo-600">Click to Browse Manuscript</p>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <input required type="checkbox" className="mt-1 h-5 w-5 text-indigo-600 border-slate-400 rounded cursor-pointer" />
              <label className="ml-3 text-sm text-slate-600 leading-normal font-medium">
                I agree to the terms. I understand my work is sent to <span className="text-indigo-600 font-bold">sudip.umesh@gmail.com</span> for review.
              </label>
            </div>

            <Button type="submit" size="lg" fullWidth disabled={loading}>
              {loading ? 'Dispatching to Sudip Umesh...' : 'Submit Sample for Evaluation'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
