
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const AIBriefGenerator: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [industry, setIndustry] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const generateBrief = async () => {
    if (!businessName || !industry) return;
    setLoading(true);
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Act as a senior digital strategist at Synth Web. Generate a concise, 3-point high-level digital strategy blueprint for a business named "${businessName}" in the "${industry}" industry. Focus on conversion, user trust, and performance. Professional and technical tone only.`,
      });
      setResult(response.text || "Unable to generate brief. Please try again.");
    } catch (error) {
      console.error(error);
      setResult("A technical error occurred. Please contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border border-gray-100 p-8 shadow-sm">
      <h3 className="text-xl font-bold mb-4 text-[#001f3f]">Interactive Project Blueprint</h3>
      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
        Experience our AI methodology. Provide your business details to receive a complimentary high-level strategic outline.
      </p>
      <div className="space-y-4 mb-6">
        <input 
          type="text" 
          placeholder="Business Name" 
          className="w-full px-4 py-3 border border-gray-200 text-sm outline-none focus:border-[#001f3f] transition-colors"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Industry" 
          className="w-full px-4 py-3 border border-gray-200 text-sm outline-none focus:border-[#001f3f] transition-colors"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
        />
        <button 
          onClick={generateBrief}
          disabled={loading || !businessName || !industry}
          className="w-full bg-[#001f3f] text-white py-3 text-sm font-semibold hover:bg-black transition-all disabled:bg-gray-400"
        >
          {loading ? 'Analyzing Infrastructure...' : 'Generate AI Blueprint'}
        </button>
      </div>

      {result && (
        <div className="bg-gray-50 p-6 border-l-4 border-[#001f3f] animate-fade-in">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#001f3f] mb-3">Your Strategic Blueprint</h4>
          <div className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed italic">
            {result}
          </div>
        </div>
      )}
    </div>
  );
};
