"use client";

import { useState } from "react";
import { Check, ShieldAlert, Award, FileSpreadsheet, Building2, UserCheck, HelpCircle, PhoneCall, Wallet } from "lucide-react";
import { motion } from "motion/react";

interface ServicesSectionProps {
  onBookConsultation: (packageName: string) => void;
}

export default function ServicesSection({ onBookConsultation }: ServicesSectionProps) {
  // Service package customizer state
  const [includeRegistrySearch, setIncludeRegistrySearch] = useState(true);
  const [includeSurveyCheck, setIncludeSurveyCheck] = useState(true);
  const [includeDeveloperAudit, setIncludeDeveloperAudit] = useState(false);
  const [includeContractDraft, setIncludeContractDraft] = useState(false);
  const [includePerfectionFile, setIncludePerfectionFile] = useState(false);

  // Prices
  const basePrice = 100000; // Title Verification Only is 100k
  const registrySearchPrice = 80000;
  const surveyCheckPrice = 90000;
  const developerAuditPrice = 50000;
  const contractDraftPrice = 120000;
  const perfectionFilePrice = 250000;

  // Calculate live total price
  const calculateTotal = () => {
    let total = basePrice;
    if (includeRegistrySearch) total += registrySearchPrice;
    if (includeSurveyCheck) total += surveyCheckPrice;
    if (includeDeveloperAudit) total += developerAuditPrice;
    if (includeContractDraft) total += contractDraftPrice;
    if (includePerfectionFile) total += perfectionFilePrice;
    return total;
  };

  const getPackageLevel = (total: number) => {
    if (total >= 500000) return { name: "Full Custom Escrow & Perfection Support", badge: "Comprehensive Shield" };
    if (total >= 270000) return { name: "Full Due Diligence & Compliance", badge: "Recommended Safety" };
    return { name: "Basic Title Auditing Check", badge: "Essential Inspection" };
  };

  const customTotal = calculateTotal();
  const packageLevel = getPackageLevel(customTotal);

  const packages = [
    {
      name: "Property Title Check Only",
      price: "₦100,000",
      description: "We check the official government database to see if the property papers are real and who the true owner is.",
      features: [
        "Lagos or Abuja land office checks",
        "Check if Certificate of Occupancy is real",
        "Confirm who legally owns the property",
        "A simple summary report of what we found",
        "Fast 48-hour results",
      ],
      badge: "Essential Check",
      actionText: "Select Base Plan",
      popular: false,
    },
    {
      name: "Full Safety & Survey Package",
      price: "₦270,000",
      description: "Our most popular choice. We verify the paperwork and send in-person surveyors to physically measure the land.",
      features: [
        "Everything in the Property Title Check",
        "We physically visit the plot of land to measure it",
        "Confirm with GPS that boundaries match maps",
        "Check the developer or builder's history",
        "Confirm nobody is fighting over the plot in court",
        "A clear, written advisory report from our lawyers",
      ],
      badge: "Standard Shield",
      actionText: "Select Safety Package",
      popular: true,
    },
    {
      name: "Complete Buying Service & Escrow",
      price: "₦500,000+",
      description: "Complete hands-on care, from negotiating prices and signing paperwork to holding funds and state registration.",
      features: [
        "Help you negotiated prices face-to-face",
        "Draft and read all sales contracts safely",
        "Safe and secure Escrow payment holding",
        "Officially register your title with the state",
        "Coordination of construction-integrity checks",
        "Governor's Consent registration support",
      ],
      badge: "Full Safe Guard",
      actionText: "Select Escrow Package",
      popular: false,
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-32 bg-white text-zinc-900 relative border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Spacious Title Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12 sm:mb-24">
          <span className="text-[10px] font-mono tracking-widest font-black uppercase text-zinc-400 block">
            OUR PROTECTION PACKAGES
          </span>
          <h2 className="font-sans text-2xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 uppercase leading-tight">
            Our Standardized Pricing.<br />
            <span className="text-zinc-650 font-serif italic font-light tracking-wide normal-case text-xl sm:text-4xl block mt-1">
              Flat Rates, Direct Representation.
            </span>
          </h2>
          <p className="text-zinc-700 text-sm leading-relaxed max-w-xl mx-auto font-sans">
            Unlike local agents who charge hidden purchase commissions and thrive on speed, Gfilled operates purely under transparent flat fee legal guidance.
          </p>
        </div>

        {/* Pricing Cards Grid (Fresha UI: Sharp, High-Contrast, Minimal outlines) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 sm:mb-28">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative rounded-sm border p-8 bg-white flex flex-col justify-between transition-all duration-300 ${
                pkg.popular
                  ? "border-zinc-950 shadow-md ring-1 ring-zinc-950"
                  : "border-zinc-200 hover:border-zinc-400 hover:shadow-xs"
              }`}
            >
              <div>
                {pkg.popular && (
                  <span className="absolute -top-3.5 left-6 px-3 py-1 rounded-sm bg-zinc-950 text-white font-mono text-[9px] font-black uppercase tracking-widest">
                    MOST POPULAR
                  </span>
                )}
                
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[9px] font-mono tracking-widest font-bold text-zinc-500 uppercase bg-zinc-100 px-2.5 py-1 rounded-sm">
                      {pkg.badge}
                    </span>
                    <h3 className="font-sans text-lg font-bold mt-4 text-zinc-950 uppercase tracking-tight">{pkg.name}</h3>
                  </div>
                </div>

                <div className="flex items-baseline mb-6 gap-1.5 border-b border-zinc-100 pb-5">
                  <span className="text-2xl sm:text-4xl font-sans font-black text-zinc-950">{pkg.price}</span>
                  <span className="text-xs text-zinc-500 font-mono tracking-wide">/ flat fee</span>
                </div>

                <p className="text-xs text-zinc-650 leading-relaxed mb-8 font-sans">{pkg.description}</p>
                
                <div className="space-y-4 mb-10">
                  <p className="text-[10px] font-bold text-zinc-950 font-mono tracking-wider uppercase">
                    INCLUDED SERVICES :
                  </p>
                  <ul className="space-y-3.5">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-700 leading-normal font-sans">
                        <Check className="w-4 h-4 text-zinc-950 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onBookConsultation(pkg.name)}
                className={`w-full py-3.5 px-3 rounded-sm text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all duration-200 cursor-pointer leading-tight ${
                  pkg.popular
                    ? "bg-zinc-950 text-white hover:bg-zinc-800"
                    : "border border-zinc-300 text-zinc-800 hover:border-zinc-950 hover:text-zinc-950"
                }`}
              >
                {pkg.actionText}
              </button>
            </div>
          ))}
        </div>

        {/* Live Interactive Quote Customizer (Fresha Checkout interface) */}
        <div id="interactive-pricing-builder" className="rounded-sm border border-zinc-200 bg-white p-4 sm:p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Customizer Left Column */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-[9px] font-bold font-mono tracking-widest text-[#C5A059] uppercase bg-amber-50 px-2.5 py-1 rounded-sm border border-[#C5A059]/10">
                  BUILD YOUR CUSTOM PROTECTION
                </span>
                <h3 className="font-sans text-xl sm:text-3xl font-extrabold mt-4 text-zinc-950 uppercase tracking-tight">
                  Custom Property Security Builder
                </h3>
                <p className="text-xs text-zinc-650 mt-2 font-sans">
                  Select and add optional registry parameters or physical surveying checks. Your dynamic total updates live below.
                </p>
              </div>

              <div className="space-y-4">
                {/* Checkbox 1 */}
                <label className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-sm border border-zinc-200 bg-zinc-50/50 cursor-pointer hover:bg-zinc-50 hover:border-zinc-400 transition-all duration-200">
                  <input
                    type="checkbox"
                    checked={includeRegistrySearch}
                    onChange={(e) => setIncludeRegistrySearch(e.target.checked)}
                    className="w-4 h-4 mt-0.5 rounded-sm border-zinc-300 text-zinc-950 focus:ring-zinc-950 bg-white"
                  />
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-xs font-bold text-zinc-950 uppercase tracking-wide">
                        Detailed Government Records Check
                      </p>
                      <span className="text-[10px] font-mono font-bold text-[#C5A059] bg-white border border-[#C5A059]/20 px-2 py-0.5 rounded-sm">
                        +₦80,000
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-500 mt-1 leading-relaxed">
                      Our legal team visits the state land registry in person to review original deeds, legal disputes, and confirm if anyone else claims ownership.
                    </p>
                  </div>
                </label>

                {/* Checkbox 2 */}
                <label className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-sm border border-zinc-200 bg-zinc-50/50 cursor-pointer hover:bg-zinc-50 hover:border-zinc-400 transition-all duration-200">
                  <input
                    type="checkbox"
                    checked={includeSurveyCheck}
                    onChange={(e) => setIncludeSurveyCheck(e.target.checked)}
                    className="w-4 h-4 mt-0.5 rounded-sm border-zinc-300 text-zinc-950 focus:ring-zinc-950 bg-white"
                  />
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-xs font-bold text-zinc-950 uppercase tracking-wide">
                        In-Person Land Surveyor GPS Check
                      </p>
                      <span className="text-[10px] font-mono font-bold text-[#C5A059] bg-white border border-[#C5A059]/20 px-2 py-0.5 rounded-sm">
                        +₦90,000
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-500 mt-1 leading-relaxed">
                      Our physical surveyors visit the property with precise digital tools to measure boundaries and ensure the land coordinates match official state maps.
                    </p>
                  </div>
                </label>

                {/* Checkbox 3 */}
                <label className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-sm border border-zinc-200 bg-zinc-50/50 cursor-pointer hover:bg-zinc-50 hover:border-zinc-400 transition-all duration-200">
                  <input
                    type="checkbox"
                    checked={includeDeveloperAudit}
                    onChange={(e) => setIncludeDeveloperAudit(e.target.checked)}
                    className="w-4 h-4 mt-0.5 rounded-sm border-zinc-300 text-zinc-950 focus:ring-zinc-950 bg-white"
                  />
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-xs font-bold text-zinc-950 uppercase tracking-wide">
                        Developer History & Government Clearances
                      </p>
                      <span className="text-[10px] font-mono font-bold text-[#C5A059] bg-white border border-[#C5A059]/20 px-2 py-0.5 rounded-sm">
                        +₦50,000
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-500 mt-1 leading-relaxed">
                      We check the developer or builder&apos;s legal standing, verify they have state permission to build, and review their history of construction lawsuits.
                    </p>
                  </div>
                </label>

                {/* Checkbox 4 */}
                <label className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-sm border border-zinc-200 bg-zinc-50/50 cursor-pointer hover:bg-zinc-50 hover:border-zinc-400 transition-all duration-200">
                  <input
                    type="checkbox"
                    checked={includeContractDraft}
                    onChange={(e) => setIncludeContractDraft(e.target.checked)}
                    className="w-4 h-4 mt-0.5 rounded-sm border-zinc-300 text-zinc-950 focus:ring-zinc-950 bg-white"
                  />
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-xs font-bold text-zinc-950 uppercase tracking-wide">
                        Legal Contract Vetting & Custom Drafting
                      </p>
                      <span className="text-[10px] font-mono font-bold text-[#C5A059] bg-white border border-[#C5A059]/20 px-2 py-0.5 rounded-sm">
                        +₦120,000
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-500 mt-1 leading-relaxed">
                      We read, write, or rewrite your Purchase Agreement and land deeds, putting dynamic safety clauses in place to guard your money if the seller backs out.
                    </p>
                  </div>
                </label>

                {/* Checkbox 5 */}
                <label className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-sm border border-zinc-200 bg-zinc-50/50 cursor-pointer hover:bg-zinc-50 hover:border-zinc-400 transition-all duration-200">
                  <input
                    type="checkbox"
                    checked={includePerfectionFile}
                    onChange={(e) => setIncludePerfectionFile(e.target.checked)}
                    className="w-4 h-4 mt-0.5 rounded-sm border-zinc-300 text-zinc-950 focus:ring-zinc-950 bg-white"
                  />
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-xs font-bold text-zinc-950 uppercase tracking-wide">
                        Governor’s Consent & Title Perfection filing
                      </p>
                      <span className="text-[10px] font-mono font-bold text-[#C5A059] bg-white border border-[#C5A059]/20 px-2 py-0.5 rounded-sm">
                        +₦250,000
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-500 mt-1 leading-relaxed">
                      We handle all the state paperwork from start to finish, officially registering your title as the absolute owner in government records.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Customizer Right Column: Live Billing Calculator (Fresha UI Checkout style) */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="rounded-sm border border-zinc-350 bg-zinc-50 p-4 sm:p-8 space-y-5 sm:space-y-6">
                <div>
                  <span className="text-[9px] font-mono font-black text-zinc-500 uppercase tracking-wider block mb-4">
                    ESTIMATED COMPLIANCE BREAKDOWN
                  </span>
                  
                  <div className="text-zinc-600 text-xs flex justify-between py-2 border-b border-zinc-200/60">
                    <span>Base Title Audit:</span>
                    <span className="font-mono font-bold text-zinc-950">₦100,000</span>
                  </div>
                  
                  {includeRegistrySearch && (
                    <div className="text-zinc-600 text-xs flex justify-between py-2 border-b border-zinc-200/60">
                      <span>Registry Search Index:</span>
                      <span className="font-mono font-bold text-zinc-950">₦80,000</span>
                    </div>
                  )}
                  {includeSurveyCheck && (
                    <div className="text-zinc-600 text-xs flex justify-between py-2 border-b border-zinc-200/60">
                      <span>GPS Survey Verification:</span>
                      <span className="font-mono font-bold text-zinc-950">₦90,000</span>
                    </div>
                  )}
                  {includeDeveloperAudit && (
                    <div className="text-zinc-600 text-xs flex justify-between py-2 border-b border-zinc-200/60">
                      <span>Developer Credentials Audit:</span>
                      <span className="font-mono font-bold text-zinc-950">₦50,000</span>
                    </div>
                  )}
                  {includeContractDraft && (
                    <div className="text-zinc-600 text-xs flex justify-between py-2 border-b border-zinc-200/60">
                      <span>Contract Vetting & Drafting:</span>
                      <span className="font-mono font-bold text-zinc-950">₦120,000</span>
                    </div>
                  )}
                  {includePerfectionFile && (
                    <div className="text-zinc-600 text-xs flex justify-between py-2 border-b border-zinc-200/60">
                      <span>Title Perfection filing:</span>
                      <span className="font-mono font-bold text-zinc-950">₦250,000</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 text-left space-y-2">
                  <p className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">GRAND TOTAL DUE</p>
                  <p className="text-4xl font-sans font-black text-zinc-950">
                    ₦{customTotal.toLocaleString()}
                  </p>
                  
                  <div className="inline-block px-3 py-1 bg-white border border-zinc-200 text-[10px] font-mono font-bold text-zinc-800 rounded-sm">
                    {packageLevel.badge}: <span className="text-zinc-950">{packageLevel.name}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onBookConsultation(`Custom Builder Package: ₦${customTotal.toLocaleString()}`)}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-3 bg-zinc-950 hover:bg-zinc-800 text-white rounded-sm text-[10px] sm:text-xs font-black tracking-widest uppercase transition-colors cursor-pointer leading-tight"
                >
                  <Wallet className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  Order Verification Plan
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
