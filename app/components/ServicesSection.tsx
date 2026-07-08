"use client";

import { Check, ShieldCheck, FileText, Search, MapPin, UserCheck, FileSignature, Building2, AlertTriangle, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface ServicesSectionProps {
  onBookConsultation: (packageName: string) => void;
}

export default function ServicesSection({ onBookConsultation }: ServicesSectionProps) {
  const plans = [
    {
      name: "Essential Verification Plan",
      description: "A foundational check for early-stage property assessment and risk identification.",
      features: [
        "Government Land Records Check",
        "Registry Search & Index Confirmation",
        "Basic Ownership Verification",
        "Summary Legal Advisory Report",
      ],
      bestFor: "First-time property checks and initial due diligence before payment commitment.",
      badge: "Essential",
      popular: false,
    },
    {
      name: "Standard Due Diligence Plan",
      description: "A comprehensive verification package for serious property buyers and investors.",
      features: [
        "Everything in the Essential Plan",
        "Developer / Seller Background Verification",
        "Property Documentation Review",
        "Preliminary Risk Assessment Report",
        "Legal Advisory on Transaction Safety",
      ],
      bestFor: "Clients actively negotiating or preparing to purchase property.",
      badge: "Recommended",
      popular: true,
    },
    {
      name: "Full Safety & Transaction Protection Plan",
      description: "A complete end-to-end legal and physical verification service for secure property acquisition.",
      features: [
        "Full Title Audit & Legal Review",
        "Government Land Records Verification",
        "Registry Index Confirmation",
        "Physical Survey Coordination & Verification",
        "Contract Review & Drafting",
        "Title Registration & Government Filing Support",
        "Full Transaction Risk Protection Advisory",
      ],
      bestFor: "High-value property investments requiring full legal protection and oversight.",
      badge: "Complete",
      popular: false,
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-32 bg-white text-zinc-900 relative border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Title Block */}
        <div className="text-center space-y-4 max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-[10px] font-mono tracking-widest font-black uppercase text-zinc-400 block">
            OUR SERVICES
          </span>
          <h2 className="font-sans text-2xl sm:text-5xl font-extrabold tracking-tight text-brand-dark uppercase leading-tight">
            Gfilled Group – <br />
            <span className="text-zinc-650 font-serif italic font-light tracking-wide normal-case text-xl sm:text-4xl block mt-1">
              Realty & Legal Practice
            </span>
          </h2>
          <p className="text-zinc-700 text-sm leading-relaxed max-w-2xl mx-auto font-sans">
            Protecting your property investment through verified legal due diligence, physical validation, and transaction support.
          </p>
          <p className="text-zinc-600 text-sm leading-relaxed max-w-2xl mx-auto font-sans">
            We help you make safe, informed, and legally sound real estate decisions.
          </p>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 sm:mb-20">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-sm border p-8 bg-white flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? "border-brand-dark shadow-md ring-1 ring-brand-dark"
                  : "border-zinc-200 hover:border-zinc-400 hover:shadow-xs"
              }`}
            >
              <div>
                {plan.popular && (
                  <span className="absolute -top-3.5 left-6 px-3 py-1 rounded-sm bg-brand-dark text-white font-mono text-[9px] font-black uppercase tracking-widest">
                    RECOMMENDED
                  </span>
                )}
                
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[9px] font-mono tracking-widest font-bold text-zinc-500 uppercase bg-zinc-100 px-2.5 py-1 rounded-sm">
                      {plan.badge}
                    </span>
                    <h3 className="font-sans text-lg font-bold mt-4 text-brand-dark uppercase tracking-tight">{plan.name}</h3>
                  </div>
                </div>

                <p className="text-xs text-zinc-650 leading-relaxed mb-6 font-sans">{plan.description}</p>
                
                <div className="space-y-4 mb-6">
                  <p className="text-[10px] font-bold text-brand-dark font-mono tracking-wider uppercase">
                    THIS PLAN INCLUDES:
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-700 leading-normal font-sans">
                        <Check className="w-4 h-4 text-brand-dark flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-[11px] text-zinc-500 italic font-sans border-t border-zinc-100 pt-4 mt-4">
                  <span className="font-bold text-brand-dark not-italic uppercase text-[10px]">Best suited for: </span>
                  {plan.bestFor}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onBookConsultation(plan.name)}
                className={`w-full py-3.5 px-3 rounded-sm text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all duration-200 cursor-pointer leading-tight mt-6 ${
                  plan.popular
                    ? "bg-brand-dark text-white hover:bg-blue-800"
                    : "border border-zinc-300 text-zinc-800 hover:border-brand-dark hover:text-brand-dark"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Why Choose Gfilled */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 sm:mb-16">
          <div className="p-6 sm:p-8 rounded-sm bg-zinc-50 border border-zinc-200 hover:border-zinc-400 hover:shadow-xs transition-all text-left">
            <FileText className="w-8 h-8 text-brand-dark mb-5" />
            <h4 className="font-sans font-black text-xs text-brand-dark uppercase tracking-wider">Legal First Approach</h4>
            <p className="text-xs text-zinc-650 mt-2.5 leading-relaxed font-sans">
              Every transaction starts with a legal review. We never skip the due diligence, no matter how good the deal looks.
            </p>
          </div>
          <div className="p-6 sm:p-8 rounded-sm bg-zinc-50 border border-zinc-200 hover:border-zinc-400 hover:shadow-xs transition-all text-left">
            <Search className="w-8 h-8 text-brand-dark mb-5" />
            <h4 className="font-sans font-black text-xs text-brand-dark uppercase tracking-wider">Structured Due Diligence</h4>
            <p className="text-xs text-zinc-650 mt-2.5 leading-relaxed font-sans">
              Our verification process follows a clear, proven framework. Nothing is left to chance or assumptions.
            </p>
          </div>
          <div className="p-6 sm:p-8 rounded-sm bg-zinc-50 border border-zinc-200 hover:border-zinc-400 hover:shadow-xs transition-all text-left">
            <ShieldCheck className="w-8 h-8 text-brand-dark mb-5" />
            <h4 className="font-sans font-black text-xs text-brand-dark uppercase tracking-wider">Risk Reduction Focus</h4>
            <p className="text-xs text-zinc-650 mt-2.5 leading-relaxed font-sans">
              Our entire process is designed to identify and eliminate risks before you commit your money.
            </p>
          </div>
          <div className="p-6 sm:p-8 rounded-sm bg-zinc-50 border border-zinc-200 hover:border-zinc-400 hover:shadow-xs transition-all text-left">
            <FileSignature className="w-8 h-8 text-brand-dark mb-5" />
            <h4 className="font-sans font-black text-xs text-brand-dark uppercase tracking-wider">Transparent Reporting</h4>
            <p className="text-xs text-zinc-650 mt-2.5 leading-relaxed font-sans">
              You get clear written reports at every stage. No hidden findings, no surprises, no confusing legal jargon.
            </p>
          </div>
          <div className="p-6 sm:p-8 rounded-sm bg-zinc-50 border border-zinc-200 hover:border-zinc-400 hover:shadow-xs transition-all text-left">
            <Building2 className="w-8 h-8 text-brand-dark mb-5" />
            <h4 className="font-sans font-black text-xs text-brand-dark uppercase tracking-wider">End-to-End Support</h4>
            <p className="text-xs text-zinc-650 mt-2.5 leading-relaxed font-sans">
              From the first call to final ownership registration, we stay with you through every step of your journey.
            </p>
          </div>
          <div className="p-6 sm:p-8 rounded-sm bg-brand-dark text-white hover:bg-blue-800 transition-all text-left cursor-pointer"
            onClick={() => onBookConsultation("Get Started")}>
            <ArrowRight className="w-8 h-8 text-[#C5A059] mb-5" />
            <h4 className="font-sans font-black text-xs uppercase tracking-wider">Ready to Secure Your Property?</h4>
            <p className="text-xs text-zinc-300 mt-2.5 leading-relaxed font-sans">
              Choose a plan that fits your stage and let our legal team guide you through a safe, verified transaction.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => onBookConsultation("Proceed with Property Verification")}
            className="inline-flex items-center gap-2 py-4 px-8 bg-brand-dark hover:bg-blue-800 text-white rounded-sm text-xs sm:text-sm font-black tracking-widest uppercase transition-colors cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4" />
            Proceed with Property Verification
          </button>
        </div>

      </div>
    </section>
  );
}
