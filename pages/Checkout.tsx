
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { PRICING_PLANS, TURNAROUND_TIERS } from '../constants';

export const Checkout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  // Form State
  const [cardNumber, setCardNumber] = React.useState('');
  const [expiry, setExpiry] = React.useState('');
  const [cvc, setCvc] = React.useState('');

  const query = new URLSearchParams(location.search);
  const serviceId = query.get('service') || 'proofreading';
  const wordCount = query.get('words') || '1000';
  const turnaroundId = query.get('turnaround') || 'standard';
  const total = query.get('total') || '0.00';

  const service = PRICING_PLANS.find(s => s.id === serviceId);
  const turnaround = TURNAROUND_TIERS.find(t => t.id === turnaroundId);

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Limit to 16 digits exactly
    const val = e.target.value.replace(/\D/g, '').substring(0, 16);
    setCardNumber(val);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let raw = e.target.value.replace(/\D/g, '').substring(0, 6); // Max 6 digits (MMYYYY)
    let formatted = '';

    if (raw.length >= 1) {
      // If first digit of month is 2-9, prefix with 0
      if (raw.length === 1 && parseInt(raw[0]) > 1) {
        raw = '0' + raw;
      }
      
      let month = parseInt(raw.substring(0, 2));
      if (raw.length >= 2) {
        if (month > 12) month = 12;
        if (month < 1 && raw.length === 2) month = 1;
        
        formatted = (month < 10 ? '0' + month : month.toString());
        if (raw.length > 2) {
          formatted += ' / ' + raw.substring(2, 6);
        }
      } else {
        formatted = raw;
      }
    }
    setExpiry(formatted);
  };

  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Limit to 3 digits exactly
    const val = e.target.value.replace(/\D/g, '').substring(0, 3);
    setCvc(val);
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final Year Validation
    const currentYear = new Date().getFullYear();
    const expiryParts = expiry.split(' / ');
    const year = expiryParts[1] ? parseInt(expiryParts[1]) : 0;

    if (cardNumber.length !== 16) {
      alert("Please enter a valid 16-digit card number.");
      return;
    }
    if (year < currentYear && expiryParts[1]?.length === 4) {
      alert(`The expiry year cannot be in the past. Please enter ${currentYear} or later.`);
      return;
    }
    if (expiryParts[1]?.length !== 4) {
      alert("Please enter a valid 4-digit year (e.g., 2028).");
      return;
    }
    if (cvc.length !== 3) {
      alert("CVC must be exactly 3 digits.");
      return;
    }

    setLoading(true);
    // Simulate Backend Payment Processing
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2500);
  };

  if (success) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center bg-slate-50">
        <div className="max-w-xl w-full px-4 text-center">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h1 className="text-4xl font-bold mb-4">Transaction Confirmed!</h1>
          <p className="text-lg text-slate-600 mb-4 leading-relaxed">
            Your manuscript and job ticket have been dispatched to <span className="font-bold text-indigo-600">sudip.umesh@gmail.com</span>.
          </p>
          <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 mb-10 text-left shadow-lg">
            <h4 className="font-bold text-xs text-slate-400 uppercase tracking-widest mb-4">Order Summary</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-slate-900 border-b border-slate-50 pb-2"><span>Plan:</span> <span className="font-bold">{service?.name}</span></div>
              <div className="flex justify-between text-slate-900 border-b border-slate-50 pb-2"><span>Words:</span> <span className="font-bold">{wordCount}</span></div>
              <div className="flex justify-between text-indigo-600"><span>Paid:</span> <span className="font-bold">${total}</span></div>
            </div>
          </div>
          <Button size="lg" onClick={() => navigate('/')}>Return Home</Button>
        </div>
      </div>
    );
  }

  const inputClass = "w-full bg-white border-2 border-slate-300 text-slate-900 rounded-xl p-4 outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500 transition-all placeholder:text-slate-400 font-bold";

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Secure Checkout</h1>
          <p className="text-slate-600 font-medium italic">Processing order for sudip.umesh@gmail.com</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <form onSubmit={handlePayment} className="space-y-8">
              {/* Manuscript Section */}
              <div className="bg-white p-8 rounded-3xl border-2 border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-slate-900">1. Final Manuscript</h3>
                <div className="border-2 border-slate-400 border-dashed rounded-2xl p-8 text-center bg-slate-50 hover:bg-white transition-all cursor-pointer">
                  <svg className="mx-auto h-12 w-12 text-slate-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-slate-900 font-bold">Select Final Document for Upload</p>
                  <p className="text-xs text-slate-500 mt-1">.docx, .pdf, or .latex only</p>
                </div>
              </div>

              {/* Billing Info */}
              <div className="bg-white p-8 rounded-3xl border-2 border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-slate-900">2. Billing Details</h3>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-2 tracking-wide">Full Name (High Visibility)</label>
                    <input required type="text" placeholder="Jane Doe" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-2 tracking-wide">Billing Address</label>
                    <input required type="text" placeholder="123 Academic St." className={inputClass} />
                  </div>
                </div>
              </div>

              {/* Secure Payment */}
              <div className="bg-white p-8 rounded-3xl border-2 border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-slate-900">3. Secure Payment</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-2 tracking-wide">Card Number (16 Digits)</label>
                    <input 
                      required 
                      type="text" 
                      value={cardNumber}
                      onChange={handleCardChange}
                      placeholder="0000 0000 0000 0000" 
                      className={inputClass} 
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-2 tracking-wide">Expiry (MM / YYYY)</label>
                      <input 
                        required 
                        type="text" 
                        value={expiry}
                        onChange={handleExpiryChange}
                        placeholder="MM / YYYY" 
                        className={inputClass} 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase mb-2 tracking-wide">CVC (3 Digits)</label>
                      <input 
                        required 
                        type="text" 
                        value={cvc}
                        onChange={handleCvcChange}
                        placeholder="123" 
                        className={inputClass} 
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start bg-indigo-50 p-6 rounded-2xl border-2 border-indigo-100">
                <input required type="checkbox" className="mt-1 h-6 w-6 text-indigo-600 border-slate-400 rounded cursor-pointer" />
                <label className="ml-3 text-sm text-slate-800 leading-relaxed font-bold">
                  I confirm all details. I understand my transaction record is sent to sudip.umesh@gmail.com.
                </label>
              </div>

              <Button type="submit" size="lg" fullWidth disabled={loading}>
                {loading ? 'Processing Payment API...' : `Pay $${total} for Professional Editing`}
              </Button>
            </form>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-slate-200 sticky top-24">
              <h3 className="text-lg font-bold mb-6 text-slate-900">Your Quote</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 font-bold">Plan:</span>
                  <span className="font-bold text-slate-900">{service?.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 font-bold">Word Count:</span>
                  <span className="font-bold text-slate-900">{wordCount}</span>
                </div>
              </div>
              <div className="pt-6 border-t-2 border-slate-100">
                <div className="flex justify-between items-end">
                  <span className="text-slate-500 text-sm font-bold uppercase">Total Cost:</span>
                  <span className="text-3xl font-bold text-indigo-600">${total}</span>
                </div>
              </div>
              <p className="mt-6 text-[10px] text-slate-400 italic">Dispatched to: sudip.umesh@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
