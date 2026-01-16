
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, BUSINESS_NAME, CONTACT_EMAIL, CONTACT_PHONE, SynthWebLogo } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  onNavigateLegal?: (page: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, onNavigateLegal }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (onNavigateLegal) {
      e.preventDefault();
      onNavigateLegal('main');
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen flex flex-col text-black">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#home" onClick={handleLogoClick} className="flex items-center">
            <SynthWebLogo scale={0.7} />
          </a>
          <nav className="hidden lg:flex gap-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.path} 
                href={item.path} 
                onClick={() => onNavigateLegal?.('main')}
                className="text-xs uppercase tracking-widest font-bold hover:text-[#0d1b3e] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
             <a 
              href="#contact" 
              onClick={() => onNavigateLegal?.('main')}
              className="hidden md:block border-2 border-black px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all"
            >
              Consultation
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-black text-white pt-24 pb-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 border-b border-gray-800 pb-20 mb-12">
          <div className="md:col-span-1 flex flex-col items-start">
            <div onClick={() => onNavigateLegal?.('main')} className="cursor-pointer">
              <SynthWebLogo inverted scale={0.8} />
            </div>
            <p className="mt-8 text-gray-400 text-sm leading-relaxed max-w-xs">
              Next-generation AI website design and management. Modern, professional, and reliable.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-8 text-xs uppercase tracking-widest text-gray-500">Navigation</h4>
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a key={item.path} href={item.path} onClick={() => onNavigateLegal?.('main')} className="text-gray-300 text-sm hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-8 text-xs uppercase tracking-widest text-gray-500">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="font-bold text-white">Gabriella Stroh</li>
              <li>{CONTACT_EMAIL}</li>
              <li>{CONTACT_PHONE}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-8 text-xs uppercase tracking-widest text-gray-500">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><button onClick={() => onNavigateLegal?.('privacy')} className="hover:text-white transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => onNavigateLegal?.('terms')} className="hover:text-white transition-colors">Terms & Conditions</button></li>
              <li><button onClick={() => onNavigateLegal?.('sla')} className="hover:text-white transition-colors">SLA Agreements</button></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
