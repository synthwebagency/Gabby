
import React from 'react';
import { NavItem, ServiceItem, PricingPlan, AddOn } from './types';

export const BUSINESS_NAME = "Synth Web";
export const CONTACT_NAME = "Gabriella Stroh";
export const CONTACT_EMAIL = "synthwebagency@gmail.com";
export const CONTACT_PHONE = "+258 84 791 5746";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "#home" },
  { label: "Services", path: "#services" },
  { label: "Pricing", path: "#pricing" },
  { label: "Add-Ons", path: "#addons" },
  { label: "Reports", path: "#reports" },
  { label: "Contact", path: "#contact" },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "AI-Powered Website Creation",
    description: "Utilizing advanced artificial intelligence to engineer high-performance, aesthetically minimal websites tailored to your brand strategy.",
    features: [
      "Custom UI/UX Architecture",
      "Optimized Performance",
      "Mobile-First Design",
      "Rapid Deployment Cycles"
    ]
  },
  {
    title: "Ongoing Management & Maintenance",
    description: "Continuous technical oversight to ensure your platform remains secure, updated, and functional without manual intervention.",
    features: [
      "24/7 Security Monitoring",
      "Software Infrastructure Updates",
      "Cloud Hosting Management",
      "Technical Support Access"
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Uptime & Server Setup Fee",
    price: "R1000",
    frequency: "once-off",
    description: "(Required Before Subscription) Mandatory initial configuration for all new infrastructure deployments.",
    features: [
      "Initial server configuration",
      "Hosting environment setup",
      "Uptime monitoring configuration",
      "Deployment and go-live preparation"
    ]
  },
  {
    name: "Basic Subscription Plan",
    price: "R300",
    frequency: "per month",
    description: "Reliable maintenance and management for established platforms.",
    isPrimary: true,
    features: [
      "Website maintenance",
      "Website remains live and accessible",
      "Basic uptime monitoring",
      "Server management",
      "Minor content updates",
      "Technical stability and ongoing support"
    ]
  }
];

export const ADD_ONS: AddOn[] = [
  { title: "Monthly website performance report", description: "Detailed analytics on visitor behavior and site performance." },
  { title: "Competitor analysis sheet", description: "Ongoing tracking of industry rivals and positioning." },
  { title: "Image upgrades / enhanced visuals", description: "Premium visual assets and aesthetic refinements." },
  { title: "Booking system integration", description: "Seamless appointment and reservation capabilities." },
  { title: "Live chat integration", description: "Real-time customer engagement software." }
];

export const SynthWebLogo = ({ inverted = false, scale = 1 }: { inverted?: boolean; scale?: number }) => {
  const frameColor = inverted ? "white" : "black";
  const webTextColor = inverted ? "white" : "black";
  const synthTextColor = "#0d1b3e"; // Dark Blue from logo

  return (
    <div className="flex flex-col items-center justify-center select-none" style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}>
      <div 
        className="border-[3px] px-3 py-1 flex flex-col items-center justify-center min-w-[100px]" 
        style={{ borderColor: frameColor }}
      >
        <span className="text-[24px] font-bold leading-none tracking-tight" style={{ color: synthTextColor }}>
          synth
        </span>
        <span className="text-[24px] font-light leading-none tracking-tight" style={{ color: webTextColor }}>
          web
        </span>
      </div>
      <div 
        className="w-full h-[3px] mt-[4px]" 
        style={{ backgroundColor: frameColor }}
      ></div>
    </div>
  );
};
