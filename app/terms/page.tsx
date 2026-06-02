"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Scale, ShieldCheck, Heart, AlertCircle, Calendar } from "lucide-react";
import { motion } from "motion/react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-amber-100 selection:text-amber-950">
      {/* Visual Top Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200 py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group text-zinc-900 hover:text-[#C5A059] transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest font-sans">
              Back to Premium Registry
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 relative">
              <Image src="https://pub-c0e4eba1bc8e4753be4abcf9f2033e98.r2.dev/logo.png" fill className="object-contain" alt="GFilled Logo" referrerPolicy="no-referrer" />
            </div>
            <span className="font-sans font-extrabold text-sm tracking-wider uppercase">
              GFilled Group
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-zinc-950 text-white py-16 px-6 relative overflow-hidden border-b border-[#C5A059]/20">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://framerusercontent.com/images/sTFbj7NSmZN3dt0Z5GhI6tjPuU.jpeg?width=1000"
            alt="Background design"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10 space-y-4">
          <span className="text-[10px] font-mono tracking-widest font-black uppercase text-[#C5A059] block">
            TERMS & AGREEMENTS
          </span>
          <h1 className="font-sans text-3xl sm:text-4xl font-extrabold uppercase tracking-tight leading-tight">
            How We Work Together
          </h1>
          <p className="font-serif italic text-zinc-300 text-lg max-w-xl mx-auto">
            “No hidden clauses or small print. Just a clear, honest agreement between friends.”
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-sm border border-zinc-200 p-8 sm:p-12 shadow-sm space-y-10">
          
          {/* Introduction Card */}
          <div className="flex gap-4 items-start bg-zinc-50 p-5 sm:p-6 rounded-sm border border-zinc-150">
            <Heart className="w-8 h-8 text-[#C5A059] shrink-0 mt-1" />
            <div className="space-y-1">
              <h2 className="font-sans font-bold text-sm text-zinc-950 uppercase tracking-wider">
                We Work ONLY For You
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Most estate agents in Nigeria work for the seller because they want to grab a quick sales commission. <b>We do things differently.</b> GFilled Group does NOT sell properties, and we do NOT take commissions from developers. You hire us, and we work 100% on your side to make sure nobody tricks you.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Section 1 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-zinc-100 rounded-sm">
                  <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
                </div>
                <h3 className="font-sans font-extrabold text-sm text-zinc-900 uppercase tracking-wide">
                  1. Our Main Job: Double-Checking Every Detail
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed pl-10">
                When you hire us to review a piece of property or a building in Abuja or Lagos, we will:
              </p>
              <ul className="list-disc pl-14 text-xs sm:text-sm text-zinc-600 space-y-2">
                <li>Send physical land surveyors out to confirm that the land is on solid, legal ground—not inside a swamp, a forest reserve, or mapped for future government roads.</li>
                <li>Visit the land registry offices to verify who actually owns the land on the original government paper.</li>
                <li>Read and correct all sales agreements and contracts so you aren&apos;t forced into unfair terms.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-zinc-100 rounded-sm">
                  <AlertCircle className="w-5 h-5 text-[#C5A059]" />
                </div>
                <h3 className="font-sans font-extrabold text-sm text-zinc-900 uppercase tracking-wide">
                  2. Honest Realities About Land Searches
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed pl-10">
                We perform our investigations based on the actual physical status of the ground and active files found at the Lagos and Abuja land offices. While we are extremely thorough and catch almost every red flag, some records can be kept secret or delayed by local offices. We always write down exactly what we find, honestly and clearly, so you can make your final choice safely. 
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-zinc-100 rounded-sm">
                  <Calendar className="w-5 h-5 text-[#C5A059]" />
                </div>
                <h3 className="font-sans font-extrabold text-sm text-zinc-900 uppercase tracking-wide">
                  3. Booking & Payment Structure
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed pl-10">
                Any fees you pay us are flat rates, agreed upon up front. There are never any hidden costs or surprise bills. If your property check is incomplete because a seller refuses to show us their papers, we will let you know instantly so you can stop dealing with them before spending more of your valuable capital.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-zinc-100 rounded-sm">
                  <Scale className="w-5 h-5 text-[#C5A059]" />
                </div>
                <h3 className="font-sans font-extrabold text-sm text-zinc-900 uppercase tracking-wide">
                  4. Direct Legal Backing
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed pl-10">
                Our legal team is fully registered and licensed to practice real estate law. We stand behind our work. If you need any part of this agreement explained over a WhatsApp audio call, a phone call, or a seated zoom meeting, we are always here to help. Your peace of mind is what we care about most.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-150 text-center">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-950 hover:bg-[#C5A059] text-white hover:text-zinc-950 rounded-sm text-xs font-bold uppercase tracking-widest transition-all"
            >
              Return to Safe Landing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
