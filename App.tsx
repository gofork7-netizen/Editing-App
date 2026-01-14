
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Pricing } from './pages/Pricing';
import { FreeSample } from './pages/FreeSample';
import { FAQPage } from './pages/FAQ';
import { Checkout } from './pages/Checkout';
import { Contact } from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/free-sample" element={<FreeSample />} />
          <Route path="/faqs" element={<FAQPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<div className="py-20 text-center text-4xl font-bold">Academic Editing Specialist Bio</div>} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
