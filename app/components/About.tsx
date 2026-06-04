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
      desc: "Fortune is a Real Estate Lawyer and Property Advisor with over 8 years of experience helping people buy property safely in Nigeria. He specializes in checking land titles, verifying ownership, and making sure every legal detail is correct before you pay.\n\nHe leads Gfilled Group with one mission: to help Nigerians at home and abroad buy property without fear of scams or legal problems.",
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
                ABOUT US
              </span>
              <h2 className="font-display text-2xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 uppercase leading-tight">
                Your Safety Is Our <br />
                <span className="text-zinc-650 font-serif italic font-light tracking-wide normal-case text-xl sm:text-4xl block mt-1">
                  Number One Priority.
                </span>
              </h2>
            </div>

            <p className="text-zinc-800 text-base leading-relaxed font-sans">
              Gfilled Group helps you buy property safely in Nigeria. Yes, we have vetted properties we list for sale. And we also help you check any property you find on your own. We are licensed property lawyers and inspectors who check government land records, visit properties to measure boundaries, and review contracts so you never get scammed.
            </p>

            {/* Pain Point Diagnostic Bento Row - Generous spacing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 bg-zinc-100 p-6 sm:p-8 rounded-sm border border-zinc-200">
              <div className="space-y-3.5">
                <div className="inline-flex p-3 bg-red-100 rounded-sm text-red-700 font-bold">
                  <AlertCircle className="w-5.5 h-5.5" />
                </div>
                <h4 className="font-sans font-bold text-zinc-950 text-base uppercase tracking-wider">The Problem With Land in Nigeria</h4>
                <p className="text-xs text-zinc-700 leading-relaxed font-sans">
                  Many properties in Nigeria have fake or messy paperwork. Scammers sell the same land to multiple people, or sell land that actually belongs to the government. This can lead to demolished homes or years in court.
                </p>
              </div>

              <div className="space-y-3.5">
                <div className="inline-flex p-3 bg-emerald-100 rounded-sm text-emerald-800 font-bold">
                  <Scale className="w-5.5 h-5.5" />
                </div>
                <h4 className="font-sans font-bold text-zinc-950 text-base uppercase tracking-wider">How We Protect You</h4>
                <p className="text-xs text-zinc-700 leading-relaxed font-sans">
                  Our legal and survey teams visit government land offices in person to check original records. We also send our own surveyor to measure the land boundaries. With us, you get peace of mind.
                </p>
              </div>
            </div>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-4">
              <div className="flex gap-4">
                <Users className="w-5.5 h-5.5 text-zinc-800 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-zinc-950 text-xs uppercase tracking-wider">Honest Advice</h4>
                  <p className="text-[11px] text-zinc-600 leading-normal">We do not take commissions from sellers. We work only for your safety.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Shield className="w-5.5 h-5.5 text-zinc-850 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-zinc-950 text-xs uppercase tracking-wider">Real Checks</h4>
                  <p className="text-[11px] text-zinc-600 leading-normal">We visit government offices in person and verify coordinates against official records.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <FileText className="w-5.5 h-5.5 text-zinc-850 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-zinc-950 text-xs uppercase tracking-wider">Safe Contracts</h4>
                  <p className="text-[11px] text-zinc-600 leading-normal">We write strong contracts and help you register your ownership with the government.</p>
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
            </div>
            
            <div className="p-5 rounded-sm border border-zinc-200 bg-white shadow-sm -mt-4 relative z-20 mx-3 space-y-2.5">
              <span className="text-[9px] uppercase tracking-widest bg-zinc-900 text-white font-mono font-bold px-2.5 py-1 rounded-sm inline-block">
                Gfilled Group
              </span>
              <h3 className="font-sans font-bold text-base sm:text-xl text-zinc-950 uppercase tracking-tight">
                Lawyers Who Protect Buyers
              </h3>
              <p className="text-[10px] sm:text-[11px] text-zinc-600 leading-relaxed font-sans">
                Our team of legal experts in Abuja and Lagos checks government land records and supervises physical site inspections to make sure your investment is safe.
              </p>
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
              MEET THE TEAM
            </span>
            <h3 className="font-sans text-xl sm:text-4xl font-extrabold text-zinc-950 uppercase tracking-tight">
              The People Behind Gfilled
            </h3>
            <p className="text-zinc-600 text-sm leading-relaxed font-sans">
              Our team combines legal experts, surveyors, and client support staff who work together to keep your property purchase safe and stress free.
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
