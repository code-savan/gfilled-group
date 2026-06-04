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
              Helping Nigerians at home and abroad buy property safely through physical land checks, government registry searches, and expert legal advice.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="https://www.instagram.com/gfilled_group/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-zinc-500 hover:text-[#C5A059] transition-colors uppercase tracking-wider font-bold">Instagram</a>
              <a href="https://web.facebook.com/people/Gfilled-Gr/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-zinc-500 hover:text-[#C5A059] transition-colors uppercase tracking-wider font-bold">Facebook</a>
              <a href="https://www.tiktok.com/@gfilledgroup" target="_blank" rel="noopener noreferrer" className="text-[10px] text-zinc-500 hover:text-[#C5A059] transition-colors uppercase tracking-wider font-bold">TikTok</a>
              <a href="https://www.linkedin.com/in/gfilled-group-8b6148363" target="_blank" rel="noopener noreferrer" className="text-[10px] text-zinc-500 hover:text-[#C5A059] transition-colors uppercase tracking-wider font-bold">LinkedIn</a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A059] font-mono">
              Quick Links
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
                Services
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
              Contact
            </h4>
            <div className="space-y-2 text-xs text-zinc-400">
              <p>
                Valencia Garden Estate, Louisiana 2, The White House, Lokogoma, Abuja.
              </p>
              <p className="text-[11px] font-mono leading-normal text-zinc-500">
                legal@gfilled.com
              </p>
              <p className="text-[11px] font-mono leading-normal text-zinc-500">
                09135213710
              </p>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Block */}
        <div className="pt-8 text-[10px] text-zinc-500 space-y-4 leading-relaxed font-sans select-none">
          <p>
            Gfilled Group helps buyers verify properties and lists vetted properties for sale. We provide independent checks on government land records and physical inspections. Our reports are based on the information available at the time of inspection.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between sm:gap-6 border-t border-zinc-900/50 pt-6 text-[11px] text-zinc-650 font-mono uppercase font-semibold">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              <span className="text-center sm:text-left w-full sm:w-auto">
                &copy; {currentYear} Gfilled Group. All rights reserved.
              </span>
              <span className="flex items-center gap-x-4">
                <Link href="/privacy" className="hover:text-[#C5A059] transition-colors font-sans">
                  Privacy Policy
                </Link>
                <span className="text-zinc-800">|</span>
                <Link href="/terms" className="hover:text-[#C5A059] transition-colors font-sans">
                  Terms of Use
                </Link>
              </span>
            </div>
            <span className="flex items-center gap-1.5 mt-2 sm:mt-0">
              <div className="w-4 h-4 overflow-hidden flex items-center justify-center relative">
                <Image src="https://pub-c0e4eba1bc8e4753be4abcf9f2033e98.r2.dev/logo.png" fill className="object-contain" alt="GFilled Logo" referrerPolicy="no-referrer" />
              </div>
              Gfilled Group
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
