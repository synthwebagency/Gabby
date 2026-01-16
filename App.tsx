
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { AIBriefGenerator } from './components/AIBriefGenerator';
import { LegalPage } from './components/LegalPage';
import { 
  SERVICES, 
  PRICING_PLANS, 
  ADD_ONS, 
  CONTACT_NAME, 
  CONTACT_EMAIL, 
  CONTACT_PHONE 
} from './constants';

const App: React.FC = () => {
  const [view, setView] = useState('main');

  const navigateTo = (page: string) => {
    setView(page);
    window.scrollTo(0, 0);
  };

  if (view === 'terms') {
    return (
      <Layout onNavigateLegal={navigateTo}>
        <LegalPage 
          title="Terms & Conditions" 
          onBack={() => setView('main')}
          content={
            <div className="space-y-12">
              <section>
                <h2 className="text-xl font-bold text-black mb-4">1. Business Information</h2>
                <p>Business name: Synth Web<br />Owner: Gabriella Stroh<br />Contact: {CONTACT_EMAIL} | {CONTACT_PHONE}</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-black mb-4">2. Services Provided</h2>
                <p>Synth Web provide AI website design and deployment, alongside ongoing maintenance under subscription. Please clarify that services are digital and remote.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-black mb-4">3. Fees & Payments</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>One-time uptime/server setup fee: R1000 (non-refundable)</li>
                  <li>Monthly subscription: R300</li>
                  <li>Payment is due according to the agreed frequency. Non-payment may result in service suspension or platform takedown.</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-bold text-black mb-4">4. Subscription Terms</h2>
                <p>The website remains live only while the subscription is active. Cancellation requires a notice period as per the specific service agreement.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-black mb-4">5. Scope of Work</h2>
                <p>Minor content updates are defined as small text changes. Anything beyond this scope requires separate discussion and quotation.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-black mb-4">6. Intellectual Property</h2>
                <p>Client owns provided content. Synth Web owns the website structure, AI-generated layouts, code, and system logic unless otherwise agreed. A license is granted while the subscription is active.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-black mb-4">7. Third-Party Services</h2>
                <p>We utilize third-party hosting, analytics, and integration tools. Synth Web is not responsible for outages originating from these third-party providers.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-black mb-4">8. Limitation of Liability</h2>
                <p>No guarantee of sales, traffic, or rankings. Liability is limited to fees paid. No responsibility for indirect losses.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-black mb-4">9. Disclaimer</h2>
                <div className="bg-gray-50 p-6 border-l-4 border-black font-bold uppercase text-xs tracking-widest">
                  Synth Web provides AI-assisted website design and management services and does not guarantee business results, search engine rankings, traffic, or revenue.
                </div>
              </section>
            </div>
          }
        />
      </Layout>
    );
  }

  if (view === 'sla') {
    return (
      <Layout onNavigateLegal={navigateTo}>
        <LegalPage 
          title="Service Level Agreement" 
          onBack={() => setView('main')}
          content={
            <div className="space-y-12">
              <section>
                <h2 className="text-xl font-bold text-black mb-4">1. Service Description</h2>
                <p>Website hosting, uptime management, maintenance, monitoring, and ongoing support under subscription.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-black mb-4">2. Uptime Commitment</h2>
                <p>We provide basic uptime monitoring. While we aim for maximum availability, we do not guarantee 100% uptime due to third-party infrastructure dependencies.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-black mb-4">3. Support Scope</h2>
                <p>Support includes maintenance and minor updates. It excludes full design rebuilds or major feature developments without a separate quote.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-black mb-4">4. Response Times</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Minor issues: 48–72 hours</li>
                  <li>Critical downtime: Best-effort priority response</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-bold text-black mb-4">5. Maintenance Windows</h2>
                <p>Synth Web reserves the right to perform scheduled maintenance. We are not liable for temporary downtime during these windows.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-black mb-4">6. Client Responsibilities</h2>
                <p>Clients must provide accurate content, approve changes promptly, and maintain their own access credentials where applicable.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-black mb-4">7. Disclaimer</h2>
                <div className="bg-gray-50 p-6 border-l-4 border-black font-bold uppercase text-xs tracking-widest">
                  Synth Web provides AI-assisted website design and management services and does not guarantee business results, search engine rankings, traffic, or revenue.
                </div>
              </section>
            </div>
          }
        />
      </Layout>
    );
  }

  if (view === 'privacy') {
    return (
      <Layout onNavigateLegal={navigateTo}>
        <LegalPage 
          title="Privacy Policy" 
          onBack={() => setView('main')}
          content={
            <div className="space-y-12">
              <section>
                <h2 className="text-xl font-bold text-black mb-4">1. Information Collected</h2>
                <p>We collect information via contact forms (name, email, phone), website analytics, and client communication data.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-black mb-4">2. How Information Is Used</h2>
                <p>Data is used for website management, communication, service improvement, and performance reporting.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-black mb-4">3. Data Storage & Sharing</h2>
                <p>Information is stored securely. We do not sell personal data. Data is shared only with service providers (hosting, analytics) when required for operations.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-black mb-4">4. Client Rights</h2>
                <p>Clients may request access, correction, or deletion of their personal data. Data is typically removed after termination if requested.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-black mb-4">5. Disclaimer</h2>
                <div className="bg-gray-50 p-6 border-l-4 border-black font-bold uppercase text-xs tracking-widest">
                  Synth Web provides AI-assisted website design and management services and does not guarantee business results, search engine rankings, traffic, or revenue.
                </div>
              </section>
            </div>
          }
        />
      </Layout>
    );
  }

  return (
    <Layout onNavigateLegal={navigateTo}>
      {/* Home Section */}
      <section id="home" className="pt-40 pb-24 md:pt-60 md:pb-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-[#0d1b3e] text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                Synth Web Agency
              </div>
              <h1 className="text-5xl md:text-8xl font-bold leading-[0.9] mb-10 text-black tracking-tighter">
                AI Powered <br />
                <span className="text-[#0d1b3e]">Design</span> For <br />
                Modern Brands.
              </h1>
              <p className="text-xl text-gray-500 mb-12 leading-relaxed max-w-lg">
                We design and manage high-trust digital platforms using advanced AI architecture. Minimalist, professional, and built for performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="#contact" className="bg-black text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-[#0d1b3e] transition-all text-center">
                  Start Your Project
                </a>
                <a href="#services" className="border-2 border-black text-black px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-gray-50 transition-all text-center">
                  Our Services
                </a>
              </div>
            </div>
            <div className="relative">
               <AIBriefGenerator />
               <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#0d1b3e]/5 blur-[120px] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-24">
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-[0.4em] mb-6">Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-10 text-black tracking-tight">Our Core Services</h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              We leverage proprietary AI models to streamline web development, reducing lead times while maintaining uncompromising quality standards. Our subscription model ensures your platform remains technical stable and modern.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="bg-white p-12 border border-gray-100 shadow-sm">
                <div className="w-16 h-1.5 bg-[#0d1b3e] mb-12"></div>
                <h4 className="text-3xl font-bold mb-6">{service.title}</h4>
                <p className="text-gray-600 mb-10 text-lg leading-relaxed">{service.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {service.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                      <div className="w-2 h-2 bg-[#0d1b3e]"></div>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24">
             <h2 className="text-sm font-bold text-gray-400 uppercase tracking-[0.4em] mb-6">Investment</h2>
             <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Transparent Pricing</h3>
             <p className="text-lg text-gray-500">A high-trust model built for long-term partnership. A one-time setup fee followed by affordable monthly management.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {PRICING_PLANS.map((plan, idx) => (
              <div key={idx} className={`relative p-12 border-2 ${plan.isPrimary ? 'border-[#0d1b3e] bg-[#0d1b3e] text-white' : 'border-gray-200 bg-white text-black'}`}>
                {plan.isPrimary && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-1 text-[10px] font-bold uppercase tracking-[0.3em]">
                    Most Reliable
                  </div>
                )}
                <h4 className="text-xl font-bold mb-2 uppercase tracking-widest">{plan.name}</h4>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className={`text-sm uppercase tracking-widest font-bold ${plan.isPrimary ? 'text-blue-200' : 'text-gray-400'}`}>{plan.frequency}</span>
                </div>
                <p className={`mb-10 text-sm leading-relaxed ${plan.isPrimary ? 'text-blue-100' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
                <div className={`w-full h-px mb-10 ${plan.isPrimary ? 'bg-white/20' : 'bg-gray-100'}`}></div>
                <ul className="space-y-4 mb-12">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-4 text-sm font-medium">
                      <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.isPrimary ? 'text-blue-300' : 'text-[#0d1b3e]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contact" 
                  className={`block w-full text-center py-5 text-xs font-bold uppercase tracking-widest transition-all ${plan.isPrimary ? 'bg-white text-[#0d1b3e] hover:bg-black hover:text-white' : 'bg-black text-white hover:bg-[#0d1b3e]'}`}
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
          
          <div className="mt-20 max-w-3xl mx-auto p-10 bg-gray-50 border-l-4 border-[#0d1b3e]">
            <h5 className="font-bold text-lg mb-4">Note on Subscription Coverage</h5>
            <p className="text-gray-600 text-sm leading-relaxed">
              Subscription covers website maintenance, server management, and minor content updates. Any work beyond minor content updates must be discussed and quoted separately to maintain high standards of delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section id="addons" className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-[0.4em] mb-6">Enhancements</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Optional Add-On Features</h3>
            </div>
            <p className="text-gray-500 max-w-sm text-sm font-medium">
              Scale your digital footprint with specialized modules designed for conversion and growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ADD_ONS.map((addon, idx) => (
              <div key={idx} className="bg-white p-10 border border-gray-100 hover:border-[#0d1b3e] transition-colors group">
                <h4 className="text-xl font-bold mb-4 group-hover:text-[#0d1b3e] transition-colors">{addon.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section id="reports" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
               <div className="aspect-video bg-gray-900 p-8 flex flex-col justify-end relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                    <div className="w-full h-full grid grid-cols-8 grid-rows-8 gap-4 p-8">
                      {[...Array(64)].map((_, i) => (
                        <div key={i} className="bg-white/20 h-full w-full"></div>
                      ))}
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-4">Analytics Engine v2.0</div>
                    <div className="h-1 w-20 bg-blue-400 mb-6"></div>
                    <h4 className="text-white text-3xl font-bold mb-4">Metric Precision</h4>
                    <p className="text-gray-400 text-sm">Real-time tracking of engagement, load times, and conversion funnels.</p>
                  </div>
               </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-[0.4em] mb-6">Analytics</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Monthly Insights</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Understand your audience with precision. Our monthly performance insights provide a comprehensive overview of how your platform is being utilized, identifying opportunities for further optimization and growth.
              </p>
              <ul className="space-y-6">
                {[
                  "Visitor Acquisition Sources",
                  "Average Engagement Duration",
                  "Server Latency & Uptime Logs",
                  "Optimization Recommendations"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-black">
                    <div className="w-3 h-[2px] bg-[#0d1b3e]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-white p-12 md:p-24 shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div>
                <h2 className="text-sm font-bold text-gray-400 uppercase tracking-[0.4em] mb-6">Connect</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight">Get In Touch</h3>
                <p className="text-gray-500 text-lg mb-16 max-w-sm">
                  Ready to evolve your digital presence? Reach out to our team for a professional consultation.
                </p>
                
                <div className="space-y-12">
                  <div>
                    <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-4">Strategic Lead</h5>
                    <p className="text-xl font-bold text-black">{CONTACT_NAME}</p>
                  </div>
                  <div>
                    <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-4">Direct Email</h5>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-xl font-bold text-[#0d1b3e] hover:underline transition-all">{CONTACT_EMAIL}</a>
                  </div>
                  <div>
                    <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-4">Phone Contact</h5>
                    <p className="text-xl font-bold text-black">{CONTACT_PHONE}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-10">
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                    <input type="text" className="w-full bg-white border border-gray-200 p-4 outline-none focus:border-[#0d1b3e] transition-all text-sm" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                    <input type="email" className="w-full bg-white border border-gray-200 p-4 outline-none focus:border-[#0d1b3e] transition-all text-sm" placeholder="john@company.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Project Details</label>
                    <textarea className="w-full bg-white border border-gray-200 p-4 outline-none focus:border-[#0d1b3e] transition-all text-sm min-h-[150px]" placeholder="Briefly describe your digital objectives..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-black text-white py-5 text-xs font-bold uppercase tracking-widest hover:bg-[#0d1b3e] transition-all">
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default App;
