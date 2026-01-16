
import React from 'react';

interface LegalPageProps {
  title: string;
  content: React.ReactNode;
  onBack: () => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ title, content, onBack }) => {
  return (
    <div className="bg-white min-h-screen pt-40 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors mb-12"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Site
        </button>
        <h1 className="text-4xl md:text-6xl font-bold mb-16 tracking-tight">{title}</h1>
        <div className="prose prose-sm max-w-none text-gray-600 space-y-8 leading-relaxed">
          {content}
        </div>
        <div className="mt-20 pt-10 border-t border-gray-100 italic text-sm text-gray-400">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </div>
      </div>
    </div>
  );
};
