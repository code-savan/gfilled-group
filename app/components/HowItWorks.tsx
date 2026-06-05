"use client";

import { Calendar, FileSearch, ShieldCheck, ClipboardList, PenTool, Sparkles, ThumbsUp, RotateCcw } from "lucide-react";
import { motion } from "motion/react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "1. Free 15 Minute Advice Call",
      desc: "Schedule a friendly phone or WhatsApp call with our legal team. Tell us about the property and we will tell you the warning signs to watch for.",
      icon: Calendar,
      inclusion: "Free Safety Call",
    },
    {
      num: "02",
      title: "2. Government Records Check",
      desc: "Our legal team visits the land registries in person. We check official records to confirm the seller truly owns the land and nobody is fighting over it in court.",
      icon: FileSearch,
      inclusion: "Official Records Check",
    },
    {
      num: "03",
      title: "3. Measuring the Land in Person",
      desc: "We send licensed surveyors to the property. They measure the boundaries with digital GPS to make sure neighboring plots do not overlap your land.",
      icon: ShieldCheck,
      inclusion: "GPS Survey Check",
    },
    {
      num: "04",
      title: "4. Clear Written Report",
      desc: "We combine everything we found into a straightforward written report that tells you whether it is safe to buy or better to walk away.",
      icon: ClipboardList,
      inclusion: "Written Safety Report",
    },
    {
      num: "05",
      title: "5. Property Is Verified and Safe",
      desc: "If our checks confirm the property is clean, we help you proceed with confidence. We draft safe contracts, hold your payments securely, and register your ownership with the government.",
      icon: ThumbsUp,
      inclusion: "Safe Purchase Process",
    },
    {
      num: "06",
      title: "6. Register Your Ownership",
      desc: "We handle all the government paperwork to register your name as the official owner of the property.",
      icon: Sparkles,
      inclusion: "Government Registration",
    },
    {
      num: "07",
      title: "7. If Issues Are Found",
      desc: "If our checks reveal problems with the property, we advise you to walk away. We then help you source a verified, clean property and run the same thorough checks to make sure your next choice is 100% safe.",
      icon: RotateCcw,
      inclusion: "Alternative Sourcing",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-32 bg-white text-zinc-900 relative border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Title Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12 sm:mb-24">
          <span className="text-[10px] font-mono font-black tracking-widest text-zinc-400 uppercase block">
            HOW IT WORKS
          </span>
          <h2 className="font-sans text-2xl sm:text-5xl font-extrabold tracking-tight text-brand-dark uppercase leading-tight">
            Simple Steps to <br />
            <span className="text-zinc-650 font-serif italic font-light tracking-wide normal-case text-xl sm:text-4xl block mt-1">
                  Buy Property Safely.
            </span>
          </h2>
          <p className="text-zinc-700 text-sm leading-relaxed max-w-xl mx-auto font-sans">
            We guide you from our first chat to registering your name as the official owner. Here is how we keep you safe.
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
                    <div className="p-3 rounded-sm bg-white border border-zinc-200 text-brand-dark">
                      <Icon className="w-5 h-5 text-brand-dark" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-sans font-black text-xs text-brand-dark uppercase tracking-widest leading-snug">{s.title}</h3>
                    <p className="text-zinc-650 text-xs leading-relaxed font-sans mt-2">{s.desc}</p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-200 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-zinc-405 uppercase tracking-wider font-extrabold">You Get:</span>
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
