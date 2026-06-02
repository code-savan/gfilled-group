"use client";

import { Shield, Users, Scale, AlertCircle, FileText } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

export default function About() {
  const teamMembers = [
    {
      name: "Barr. Metu C. Fortune",
      role: "Founder & Managing Partner",
      dept: "Founder & Managing Partner, Gfilled Group",
      desc: "Real Estate Lawyer and Property Acquisition Advisor with over 8 years of hands on experience in real estate transactions, property due diligence, and legal advisory within Nigeria’s property market.\n\nSpecializes in title verification, transaction structuring, and legal risk assessment for property acquisitions across Abuja and other key real estate hubs in Nigeria.\n\nHe leads Gfilled Group with a focus on helping Nigerians at home and in the diaspora secure property safely, avoid fraudulent transactions, and complete real estate deals with legal clarity and confidence.",
      image: "https://pub-c0e4eba1bc8e4753be4abcf9f2033e98.r2.dev/fortune.jpeg",
    },
    {
      name: "Barr. Imobeke S. Melvin",
      role: "Co-Founder & Strategic Partner",
      dept: "Co-Founder & Strategic Partner, Gfilled Group",
      desc: "Business Development and Sales professional with experience across Nigeria's real estate and technology sectors, specialising in client acquisition, market growth strategy, and business partnerships.\n\nBrings a commercial and strategic lens to Gfilled Group, focused on expanding the firm's reach, building client relationships, and ensuring that every person who needs property protection in Nigeria knows where to find it.\n\nWorks closely with individuals, investors, and diaspora clients to connect them with the right legal support before, during, and after property transactions.",
      image: "https://pub-c0e4eba1bc8e4753be4abcf9f2033e98.r2.dev/melvin.jpeg",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-32 bg-white text-zinc-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* Left Column: Context & Nigeria Real Estate Epidemic */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <span className="text-[10px] font-mono font-black tracking-widest text-[#C5A059] uppercase block">
                ABOUT GFILLED GROUP
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 uppercase leading-tight">
                Securing Your Wealth. <br />
                <span className="text-zinc-650 font-serif italic font-light tracking-wide normal-case text-2xl sm:text-4xl block mt-1">
                  Preventing Financial Ambush.
                </span>
              </h2>
            </div>

            <p className="text-zinc-800 text-base leading-relaxed font-sans">
              GFilled Group is not a property agent trying to make a quick sale. We are licensed property lawyers and inspectors who work ONLY for you—the buyer. We check government land registries, physically visit properties to measure boundaries, and review contracts to guard your savings so you never purchase a scam or get sued.
            </p>

            {/* Pain Point Diagnostic Bento Row - Generous spacing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 bg-zinc-100 p-6 sm:p-8 rounded-sm border border-zinc-200">
              <div className="space-y-3.5">
                <div className="inline-flex p-3 bg-red-100 rounded-sm text-red-700 font-bold">
                  <AlertCircle className="w-5.5 h-5.5" />
                </div>
                <h4 className="font-sans font-bold text-zinc-950 text-base uppercase tracking-wider">The Real Estate Scams</h4>
                <p className="text-xs text-zinc-700 leading-relaxed font-sans">
                  Sadly, most land in Nigeria has fake or messy paperwork. Scammers sell the same plot to multiple buyers, or sell land that secretly belongs to the government. This often leads to homes being demolished or families spending decades in court.
                </p>
              </div>

              <div className="space-y-3.5">
                <div className="inline-flex p-3 bg-emerald-100 rounded-sm text-emerald-800 font-bold">
                  <Scale className="w-5.5 h-5.5" />
                </div>
                <h4 className="font-sans font-bold text-zinc-950 text-base uppercase tracking-wider">Your Protective Shield</h4>
                <p className="text-xs text-zinc-700 leading-relaxed font-sans">
                  Our professional legal and survey teams go straight to the local government land offices to inspect the original records. We also send our own surveyor to measure boundaries in person. With us, you are buying 100% peace of mind.
                </p>
              </div>
            </div>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-4">
              <div className="flex gap-4">
                <Users className="w-5.5 h-5.5 text-zinc-800 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-zinc-950 text-xs uppercase tracking-wider">Unbiased Advice</h4>
                  <p className="text-[11px] text-zinc-600 leading-normal">We don&apos;t sell land or take commissions from developers. We look out only for your safety.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Shield className="w-5.5 h-5.5 text-zinc-850 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-zinc-950 text-xs uppercase tracking-wider">Real Checks</h4>
                  <p className="text-[11px] text-zinc-600 leading-normal">We search government files in person and verify coordinates against official master plans.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FileText className="w-5.5 h-5.5 text-zinc-850 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-zinc-950 text-xs uppercase tracking-wider">Secure Paperwork</h4>
                  <p className="text-[11px] text-zinc-600 leading-normal">We write secure contracts and help you register your ownership safely with the state.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Team Representation & Visual Layout */}
          <div className="lg:col-span-5 relative space-y-8">
            <div className="relative h-[300px] sm:h-[500px] w-full rounded-sm overflow-hidden border border-zinc-205 shadow-md group bg-zinc-100">
              <Image
                src="https://pub-c0e4eba1bc8e4753be4abcf9f2033e98.r2.dev/team.jpeg"
                alt="Gfilled Founders & Legal Counsel"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-w-[768px]) 100vw, 500px"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/30 z-10"></div>
              
              <div className="absolute bottom-8 left-8 right-8 text-white space-y-2.5 z-20">
                <span className="text-[9px] uppercase tracking-widest bg-zinc-900 text-white font-mono font-bold px-2.5 py-1 rounded-sm">
                  GFilled Group Legal Support
                </span>
                <h3 className="font-sans font-bold text-xl text-white uppercase tracking-tight">
                  Legal Counselors Dedicated to Buyer Protection
                </h3>
                <p className="text-[11px] text-zinc-200 leading-relaxed font-sans">
                  Headed by legal specialists in Abuja and Lagos Land Registry audits. We supervise physical site border validation protocols and secure the true value of your estates.
                </p>
              </div>
            </div>

            {/* Inset quote */}
            <div className="p-6 rounded-sm border border-zinc-200 bg-zinc-100 text-zinc-800 text-[13px] italic font-medium leading-relaxed font-serif">
              &quot;We took Gfilled&apos;s full transaction escrow for an estate in Maitama, Abuja. Their legal search report identified overlapping survey claims from a government master plan that would have cost us ₦120 Million in court. Our biggest investment decision, saved in time.&quot;
              <span className="block mt-3 text-[10px] font-mono font-black text-zinc-950 not-italic uppercase tracking-widest">
                — Engr. Kolade A., UK Diaspora Client
              </span>
            </div>
          </div>
        </div>

        {/* ======================================= */}
        {/* THE TEAM SEGMENT - Freer & spaced out with luxury white space */}
        {/* ======================================= */}
        <div id="team" className="mt-16 sm:mt-32 pt-12 sm:pt-24 border-t border-zinc-200">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-12 sm:mb-20">
            <span className="text-[10px] font-mono font-black tracking-widest text-[#C5A059] uppercase block">
              OUR INVESTIGATIVE DIRECTORS
            </span>
            <h3 className="font-sans text-2xl sm:text-4xl font-extrabold text-zinc-950 uppercase tracking-tight">
              MEET THE GFILLED SECURITY BOARD
            </h3>
            <p className="text-zinc-600 text-sm leading-relaxed font-sans">
              Our professional council integrates cadastral land survey engineering, title perfection jurisprudence, and remote escrow handling to safe-keep your generational wealth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 max-w-4xl mx-auto">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="space-y-5 group text-left">
                {/* Image holder with premium vignette */}
                <div className="relative h-[320px] sm:h-[420px] rounded-sm overflow-hidden bg-zinc-100 border border-zinc-200 shadow-sm group-hover:shadow-md transition-shadow">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/25 z-10"></div>
                  <div className="absolute bottom-6 left-6 text-white text-left z-20">
                    <p className="font-mono text-[9px] text-[#C5A059] uppercase font-bold tracking-widest">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Information below */}
                <div className="space-y-1.5 px-1">
                  <h4 className="font-sans font-extrabold text-lg text-zinc-900 uppercase tracking-tight group-hover:text-zinc-650 transition-colors leading-none">
                    {member.name}
                  </h4>
                  <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider font-bold">
                    {member.dept}
                  </p>
                  <p className="text-xs leading-relaxed text-zinc-700 font-sans pt-1.5 whitespace-pre-line">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
