"use client";

import { Calendar, FileSearch, ShieldCheck, ClipboardList, PenTool, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "1. Free 15-Minute Advice Call",
      desc: "Schedule a friendly phone or WhatsApp call with our legal team. Tell us about the property you are looking at, and we will tell you the immediate warning signs to watch out for.",
      icon: Calendar,
      inclusion: "Instant Safety Check Call",
    },
    {
      num: "02",
      title: "2. Government Paperwork Check",
      desc: "Our legal teams physically visit the land registries in Lagos and Abuja. We check original government record files to confirm the seller is the true owner and that nobody has sued them over the land.",
      icon: FileSearch,
      inclusion: "Official Registry Search",
    },
    {
      num: "03",
      title: "3. Measuring the Land in Person",
      desc: "We send licensed surveyors to visit the property. They measure physical boundaries in person with precise digital GPS to make sure neighboring plots do not overlap your land.",
      icon: ShieldCheck,
      inclusion: "GPS Survey Verification",
    },
    {
      num: "04",
      title: "4. Clear Written Peace-of-Mind Report",
      desc: "We combine what we found at the state registry, the surveyor's maps, and the developer's history into a straightforward written report advising you whether it is safe to buy or best to walk away.",
      icon: ClipboardList,
      inclusion: "Written Safety Report",
    },
    {
      num: "05",
      title: "5. Safe Contracts & Protected Payments",
      desc: "Our lawyers write your Purchase Agreements safely so your money is guarded. We can also hold your payments securely, releasing funds only when all inspection results are 100% successful.",
      icon: PenTool,
      inclusion: "Solid Buyer Contracts",
    },
    {
      num: "06",
      title: "6. Registering Your Ownership",
      desc: "We handle all the state bureaucracy to officially register your name in the government records as the sole, absolute owner of the property.",
      icon: Sparkles,
      inclusion: "Official State Registration",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-32 bg-white text-zinc-900 relative border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Title Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12 sm:mb-24">
          <span className="text-[10px] font-mono font-black tracking-widest text-zinc-400 uppercase block">
            OUR DETAILED CHECKING PROCESS
          </span>
          <h2 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 uppercase leading-tight">
            Our Security Blueprint <br />
            <span className="text-zinc-650 font-serif italic font-light tracking-wide normal-case text-2xl sm:text-4xl block mt-1">
              Preventing Scams Before You Pay.
            </span>
          </h2>
          <p className="text-zinc-700 text-sm leading-relaxed max-w-xl mx-auto font-sans">
            We guide you every step of the way, from our first chat to registering your name as the official property owner. Here is how we keep you 100% safe.
          </p>
        </div>

        {/* Steps Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="relative p-6 sm:p-8 rounded-sm bg-zinc-50 border border-zinc-200 hover:border-zinc-400 hover:shadow-xs transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <span className="font-sans font-black text-4xl text-zinc-300 tracking-tight leading-none">
                      {s.num}
                    </span>
                    <div className="p-3 rounded-sm bg-white border border-zinc-200 text-zinc-950">
                      <Icon className="w-5 h-5 text-zinc-950" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-sans font-black text-xs text-zinc-950 uppercase tracking-widest leading-snug">{s.title}</h3>
                    <p className="text-zinc-650 text-xs leading-relaxed font-sans mt-2">{s.desc}</p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-200 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-zinc-405 uppercase tracking-wider font-extrabold">Deliverable:</span>
                  <span className="text-zinc-900 font-extrabold tracking-wider uppercase">{s.inclusion}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
