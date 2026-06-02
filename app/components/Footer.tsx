"use client";

import { ShieldCheck, Mail, Phone, MapPin, Scale, HelpCircle } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="gfilled-footer" className="bg-zinc-950 text-white border-t border-zinc-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-zinc-900">
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 overflow-hidden flex items-center justify-center relative">
                <Image src="https://pub-c0e4eba1bc8e4753be4abcf9f2033e98.r2.dev/logo.png" fill className="object-contain" alt="GFilled Logo" referrerPolicy="no-referrer" />
              </div>
              <div>
                <span className="font-sans font-extrabold text-lg tracking-wider text-white">
                  GFilled Group
                </span>
                <div className="h-[1px] w-full bg-[#C5A059] my-0.5" />
                <p className="font-serif italic tracking-wide text-[11px] text-zinc-400 leading-tight">
                  Realty & Legal Practice
                </p>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed font-sans max-w-sm">
              We sell certainty, not just code. Securing diaspora and domestic real estate investments through physical survey validation and land registry searches in Lagos and Abuja.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A059] font-mono">
              Secured Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-zinc-400 text-xs font-semibold">
              <button
                onClick={() => onNavigate("home")}
                className="hover:text-white text-left transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => onNavigate("about")}
                className="hover:text-white text-left transition-colors cursor-pointer"
              >
                About Us
              </button>
              <button
                onClick={() => onNavigate("services")}
                className="hover:text-white text-left transition-colors cursor-pointer"
              >
                Services & Pricing
              </button>
              <button
                onClick={() => onNavigate("why-choose")}
                className="hover:text-white text-left transition-colors cursor-pointer"
              >
                Why Choose Us
              </button>
              <button
                onClick={() => onNavigate("how-it-works")}
                className="hover:text-white text-left transition-colors cursor-pointer"
              >
                How It Works
              </button>
              <button
                onClick={() => onNavigate("testimonials")}
                className="hover:text-white text-left transition-colors cursor-pointer"
              >
                Testimonials
              </button>
              <button
                onClick={() => onNavigate("contact")}
                className="hover:text-white text-left transition-colors cursor-pointer"
              >
                Contact & Booking
              </button>
            </div>
          </div>

          {/* Practice & Affiliate */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A059] font-mono flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-[#C5A059]" />
              Legal Division
            </h4>
            <div className="space-y-2 text-xs text-zinc-400">
              <p>
                Legal Title audits under direct custody representation of{" "}
                <b className="text-zinc-300">GFilled Group</b>.
              </p>
              <p className="text-[11px] font-mono leading-normal text-zinc-500">
                Lagos Registry Code: LND-B6/FCT-N95. Abuja Registry Index: AGIS-2026.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Block */}
        <div className="pt-8 text-[10px] text-zinc-500 space-y-4 leading-relaxed font-sans select-none">
          <p>
            <b>LEGAL NOTE AND ADVISORY DISCLAIMER:</b> GFilled Group operates strictly as an independent buyer inspection representative and transactional legal advisory. Property selections shown on this portal highlight physical land-registry auditable clearings and surveyor validations; Gfilled does not guarantee general speculative financial return rates. Verification indexes represent accurate local registry searches matching original deeds at the time of checkups.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between sm:gap-6 border-t border-zinc-900/50 pt-6 text-[11px] text-zinc-650 font-mono uppercase font-semibold">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span>
                &copy; {currentYear} Gfilled Group Realty & Legal Ltd. All Rights Reserved.
              </span>
              <span className="text-zinc-800">|</span>
              <Link href="/privacy" className="hover:text-[#C5A059] transition-colors lowercase font-sans">
                Privacy Policy
              </Link>
              <span className="text-zinc-800">|</span>
              <Link href="/terms" className="hover:text-[#C5A059] transition-colors lowercase font-sans">
                Terms of Use
              </Link>
            </div>
            <span className="flex items-center gap-1.5 mt-2 sm:mt-0">
              <div className="w-4 h-4 overflow-hidden flex items-center justify-center relative">
                <Image src="https://pub-c0e4eba1bc8e4753be4abcf9f2033e98.r2.dev/logo.png" fill className="object-contain" alt="GFilled Logo" referrerPolicy="no-referrer" />
              </div>
              GFilled Group - Registered Legal Division
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
