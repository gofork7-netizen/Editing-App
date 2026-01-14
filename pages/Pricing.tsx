
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { PRICING_PLANS, TURNAROUND_TIERS } from '../constants';

export const Pricing: React.FC = () => {
  const navigate = useNavigate();
  const [wordCount, setWordCount] = React.useState<number>(1000);
  const [serviceId, setServiceId] = React.useState<string>(PRICING_PLANS[1].id);
  const [turnaroundId, setTurnaroundId] = React.useState<string>(TURNAROUND_TIERS[0].id);

  const selectedService = PRICING_PLANS.find(s => s.id === serviceId) || PRICING_PLANS[0];
  const selectedTurnaround = TURNAROUND_TIERS.find(t => t.id === turnaroundId) || TURNAROUND_TIERS[0];

  const subtotal = wordCount * selectedService.ratePerWord;
  const total = subtotal * selectedTurnaround.multiplier;

  const handleProceedToCheckout = () => {
    const params = new URLSearchParams({
      service: selectedService.id,
      words: wordCount.toString(),
      turnaround: selectedTurnaround.id,
      total: total.toFixed(2)
    });
    navigate(`/checkout?${params.toString()}`);
  };

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Transparent per-word pricing</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">Calculate your exact cost based on service level and turnaround time. No hidden fees.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Calculator */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold mb-8">Instant Quote Calculator</h3>
            
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">Word Count</label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="500"
                    max="100000"
                    step="500"
                    value={wordCount}
                    onChange={(e) => setWordCount(parseInt(e.target.value))}
                    className="flex-grow accent-indigo-600 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <input
                    type="number"
                    value={wordCount}
                    onChange={(e) => setWordCount(parseInt(e.target.value) || 0)}
                    className="w-32 border border-slate-200 rounded-lg p-2 font-bold text-right"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">Service Level</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {PRICING_PLANS.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setServiceId(service.id)}
                      className={`text-left p-4 rounded-xl border-2 transition-all ${
                        serviceId === service.id 
                          ? 'border-indigo-600 bg-indigo-50 shadow-md' 
                          : 'border-slate-100 bg-white hover:border-slate-200'
                      }`}
                    >
                      <div className="font-bold mb-1">{service.name}</div>
                      <div className="text-xs text-slate-500">${service.ratePerWord} / word</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">Desired Turnaround</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {TURNAROUND_TIERS.map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => setTurnaroundId(tier.id)}
                      className={`text-left p-4 rounded-xl border-2 transition-all ${
                        turnaroundId === tier.id 
                          ? 'border-indigo-600 bg-indigo-50 shadow-md' 
                          : 'border-slate-100 bg-white hover:border-slate-200'
                      }`}
                    >
                      <div className="font-bold mb-1">{tier.name}</div>
                      <div className="text-xs text-slate-500">{tier.multiplier === 1 ? 'Base Rate' : `+${Math.round((tier.multiplier - 1) * 100)}% Rush Fee`}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Result Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-indigo-900 text-white rounded-3xl p-8 shadow-2xl sticky top-24">
              <h3 className="text-xl font-bold mb-6 border-b border-indigo-800 pb-4">Estimated Total</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-indigo-300">
                  <span>Base Cost ({selectedService.name}):</span>
                  <span className="text-white">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-indigo-300">
                  <span>Rush Multiplier:</span>
                  <span className="text-white">x{selectedTurnaround.multiplier.toFixed(1)}</span>
                </div>
                <div className="border-t border-indigo-800 pt-4 flex justify-between items-end">
                  <span className="text-indigo-200 font-bold text-lg">Total Quote:</span>
                  <span className="text-3xl font-bold">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-4">
                <Button fullWidth size="lg" onClick={handleProceedToCheckout}>Proceed to Checkout</Button>
                <Button variant="outline" fullWidth className="border-indigo-700 text-indigo-200 hover:bg-indigo-800">Save for Later</Button>
              </div>

              <div className="mt-8 text-xs text-indigo-300 leading-relaxed italic">
                *Final quote depends on manual quality check of your document. We will confirm word count before billing.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
