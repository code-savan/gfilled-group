"use client";

import { ShieldCheck, ShieldAlert, Crosshair, Users, Activity } from "lucide-react";
import { motion } from "motion/react";

export default function WhyChooseUs() {
  const contrasts = [
    {
      factor: "Who is on your side?",
      blind: "The Agent or Relative: They want to close the deal quickly to collect their commission, which is often 5% to 10% of the price. They might stay silent about problems.",
      verified: "Gfilled Group: You pay us a single, flat fee to check the land. On our flat-fee structure, we look strictly for safety, and we are not afraid to tell you to walk away from a bad deal.",
    },
    {
      factor: "Checking the Papers",
      blind: "Developer's Brochures: Believing the glossy sales booklet when it says the papers (C of O) are legal, or trusting family land divided on a scrap of paper.",
      verified: "Checking Official Registries: We physically go to government land registries in Abuja and Lagos to confirm true ownership and check for active court disputes or unpaid state loans.",
    },
    {
      factor: "Checking the Boundaries",
      blind: "The Eye Test: Standing on-site and thinking 'looks great!' without realizing neighbor boundaries overlap, or that the coordinates secretly belong to government roads.",
      verified: "Official Surveyor Checks: We send a fully licensed surveyor with digital GPS equipment to measure the land and make sure the lines match the government master plan.",
    },
    {
      factor: "Diaspora Checks",
      blind: "Relying on Family: Trusting a cousin or friend who lives in Nigeria to check things. Family members can sometimes inflate prices by double or buy swampy land by accident.",
      verified: "Safe Remote Interface: You get direct surveyor maps, certified legal documents, and flat-fee schedules without depending on anyone's word.",
    },
  ];

  return (
    <section id="why-choose" className="py-16 sm:py-32 bg-white text-zinc-900 overflow-hidden border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header Block */}
        <div className="space-y-4 text-center max-w-3xl mx-auto mb-12 sm:mb-24">
          <span className="text-[10px] font-mono font-black tracking-widest text-[#C5A059] uppercase block">
            THE BLIND METHOD VS. SECURED PURCHASING
          </span>
          <h2 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 uppercase leading-tight">
            Assumptions Cost Millions. <br />
            <span className="text-zinc-650 font-serif italic font-light tracking-wide normal-case text-2xl sm:text-4xl block mt-1">
              We Deliver Absolute Objectivity.
            </span>
          </h2>
          <p className="text-zinc-700 text-sm leading-relaxed max-w-xl mx-auto font-sans">
            Buying land in Nigeria is usually very risky for the buyer. When you buy through an agent who gets a sales commission, they may not tell you about paperwork issues. We act as your private shield, looking out ONLY for your safety.
          </p>
        </div>

        {/* Dynamic Contrast Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-12 sm:mb-24">
          {/* Unverified Side (Threat) */}
          <div className="lg:col-span-5 rounded-sm border border-red-200 bg-red-50/10 p-5 sm:p-8 md:p-10 flex flex-col justify-between shadow-xs">
            <div className="space-y-8">
              <div className="flex items-center gap-3.5">
                <div className="p-3 bg-red-50 text-red-650 rounded-sm border border-red-100">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans font-black text-xs text-zinc-950 uppercase tracking-widest">
                    The Blind Purchase
                  </h3>
                  <p className="text-[9px] font-mono text-red-700 uppercase font-bold mt-1">HIGH RISK EXPOSURE</p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="p-4 sm:p-5 rounded-sm bg-white border border-red-100 shadow-xs text-left">
                  <h4 className="text-[9px] font-black text-red-700 uppercase font-mono tracking-widest">RELATIVE CONTROL</h4>
                  <p className="text-xs text-zinc-750 leading-relaxed mt-1.5 font-sans">
                    “My brother’s friend is an agent. He verified it personally.” 90% of diaspora family-facilitated purchases result in cost fraud or double-allocated swamp titles.
                  </p>
                </div>
                
                <div className="p-4 sm:p-5 rounded-sm bg-white border border-red-100 shadow-xs text-left">
                  <h4 className="text-[9px] font-black text-red-700 uppercase font-mono tracking-widest">DEVELOPER BROCHURES</h4>
                  <p className="text-xs text-zinc-750 leading-relaxed mt-1.5 font-sans">
                    Buying on a marketing blueprint that promises “C of O in-view.” Demolitions strike when the state rejects layout approvals.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-sm bg-white border border-red-100 shadow-xs text-left">
                  <h4 className="text-[9px] font-black text-red-700 uppercase font-mono tracking-widest">COMMISSION INTERESTS</h4>
                  <p className="text-xs text-zinc-750 leading-relaxed mt-1.5 font-sans">
                    Agents represent sellers and work for quick commissions. Title encumbrances are papered over until funds are paid.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-red-100 text-left">
              <span className="text-[9px] font-mono font-bold text-red-700 tracking-wider">
                RISK ACCUMULATION: 82.4% AVERAGE ADJACENT LOSS RATE
              </span>
            </div>
          </div>

          {/* Gfilled Secured Comparison Sheet */}
          <div className="lg:col-span-7 rounded-sm border border-zinc-200 bg-white p-5 sm:p-8 md:p-10 flex flex-col justify-between shadow-xs">
            <div className="space-y-8">
              <div className="flex items-center gap-3.5 pb-5 border-b border-zinc-150 text-left">
                <div className="p-3 bg-zinc-50 border border-zinc-200 text-zinc-950 rounded-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans font-black text-xs text-zinc-950 uppercase tracking-widest">
                    Gfilled Verification Standard
                  </h3>
                  <p className="text-[9px] font-mono text-zinc-505 uppercase font-bold mt-1">100% REGISTRY SECURE</p>
                </div>
              </div>

              {/* Grid-style comparison lists */}
              <div className="space-y-6 text-left">
                {contrasts.map((c, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-6 border-b border-zinc-150 last:border-b-0 last:pb-0">
                    <div className="md:col-span-3">
                      <p className="text-[9px] font-black text-zinc-950 uppercase font-mono tracking-wider">{c.factor}</p>
                    </div>
                    <div className="md:col-span-4 bg-red-50/50 p-3 rounded-sm border border-red-100">
                      <p className="text-[11px] text-zinc-650 leading-relaxed font-sans">{c.blind}</p>
                    </div>
                    <div className="md:col-span-5 bg-zinc-50 p-3 rounded-sm border border-zinc-205">
                      <p className="text-xs font-bold text-zinc-900 leading-relaxed font-sans">{c.verified}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Bento highlights (Fresha UI: Pure White & Soft grays with subtle borders) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 sm:p-8 rounded-sm bg-zinc-50 border border-zinc-200 hover:border-zinc-450 hover:shadow-xs transition-all text-left">
            <Crosshair className="w-8 h-8 text-zinc-900 mb-5" />
            <h4 className="font-sans font-black text-xs text-zinc-950 uppercase tracking-wider">Lagos & Abuja Experts</h4>
            <p className="text-xs text-zinc-650 mt-2.5 leading-relaxed font-sans">
              We focus 100% on Abuja and Lagos registries because these cities have the most complicated land rules and property scams.
            </p>
          </div>
          
          <div className="p-6 sm:p-8 rounded-sm bg-zinc-50 border border-zinc-200 hover:border-zinc-450 hover:shadow-xs transition-all text-left">
            <Users className="w-8 h-8 text-zinc-900 mb-5" />
            <h4 className="font-sans font-black text-xs text-zinc-950 uppercase tracking-wider font-sans">Lawyers On Your Team</h4>
            <p className="text-xs text-zinc-650 mt-2.5 leading-relaxed font-sans">
              We aren&apos;t just an inspection company—we are a fully registered legal division. If things look risky, our team has the official power to step in and secure your funds.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-sm bg-zinc-50 border border-zinc-200 hover:border-zinc-450 hover:shadow-xs transition-all text-left">
            <Activity className="w-8 h-8 text-zinc-900 mb-5" />
            <h4 className="font-sans font-black text-xs text-zinc-950 uppercase tracking-wider">Guaranteed In-Person Checks</h4>
            <p className="text-xs text-zinc-650 mt-2.5 leading-relaxed font-sans">
              We don&apos;t do guesswork. We physically visit state archives, check the historical deeds of previous owners, and double-check coordinates to stop any boundary disputes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
