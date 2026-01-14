
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Persistent Sticky CTA for Mobile/Tablet */}
      <div className="md:hidden sticky top-0 z-50 bg-indigo-600 text-white py-2 px-4 text-center text-sm font-medium">
        <Link to="/free-sample">Get a free 1,000-word sample edit →</Link>
      </div>

      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-indigo-900 font-serif">ELITE</span>
                <span className="hidden sm:inline text-sm text-slate-500 font-medium uppercase tracking-widest border-l border-slate-300 pl-3">Academic Editing</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.path ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/free-sample">
                <Button size="sm">Free Sample</Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-indigo-600"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block py-2 text-slate-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/free-sample" onClick={() => setIsMenuOpen(false)} className="block py-2">
              <Button fullWidth>Free Sample</Button>
            </Link>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="text-2xl font-bold text-white font-serif mb-6 inline-block">ELITE</Link>
              <p className="text-slate-400 max-w-sm mb-6">
                Protecting your meaning and improving clarity through rigorous academic editing and proofreading. Specialized in PhD theses and research publications.
              </p>
              <div className="flex space-x-4">
                {/* Social placeholders */}
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Services</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/services/thesis" className="hover:text-indigo-400">Thesis Editing</Link></li>
                <li><Link to="/services/proofreading" className="hover:text-indigo-400">Academic Proofreading</Link></li>
                <li><Link to="/services/developmental" className="hover:text-indigo-400">Developmental Editing</Link></li>
                <li><Link to="/services/formatting" className="hover:text-indigo-400">Referencing & Formatting</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/about" className="hover:text-indigo-400">About Me</Link></li>
                <li><Link to="/how-it-works" className="hover:text-indigo-400">How It Works</Link></li>
                <li><Link to="/privacy" className="hover:text-indigo-400">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-indigo-400">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Elite Academic Editing. All rights reserved.</p>
            <p className="mt-4 md:mt-0">Confidential Handling • Style-guide Precision • Track Changes</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
