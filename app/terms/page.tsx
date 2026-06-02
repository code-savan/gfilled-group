"use client";

import Link from "next/link";
import { ArrowLeft, Scale, ShieldCheck, Heart, AlertCircle, Calendar } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-amber-100 selection:text-amber-950">
      {/* Sticky Nav */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-zinc-500 hover:text-zinc-950 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest">Back</span>
          </Link>
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Terms of Use</span>
        </div>
      </nav>

      {/* Header */}
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="max-w-3xl mx-auto px-6 py-12 sm:py-20 text-center space-y-4">
          <span className="text-[10px] font-mono tracking-widest font-black uppercase text-[#C5A059] block">
            TERMS & AGREEMENTS
          </span>
          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold uppercase tracking-tight leading-tight text-zinc-950">
            How We Work Together
          </h1>
          <p className="font-serif italic text-zinc-500 text-base sm:text-lg max-w-xl mx-auto">
            &ldquo;No hidden clauses or small print. Just a clear, honest agreement between friends.&rdquo;
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Intro Card */}
          <div className="flex gap-4 items-start bg-zinc-50 p-5 sm:p-6 rounded-sm border border-zinc-200">
            <Heart className="w-8 h-8 text-[#C5A059] shrink-0 mt-1" />
            <div className="space-y-1">
              <h2 className="font-sans font-bold text-sm text-zinc-950 uppercase tracking-wider">We Work ONLY For You</h2>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Most estate agents in Nigeria work for the seller because they want to grab a quick sales commission. <b>We do things differently.</b> GFilled Group does NOT sell properties, and we do NOT take commissions from developers. You hire us, and we work 100% on your side to make sure nobody tricks you.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-zinc-100 rounded-sm">
                  <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
                </div>
                <h3 className="font-sans font-extrabold text-sm text-zinc-900 uppercase tracking-wide">1. Our Main Job: Double-Checking Every Detail</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pl-10">
                When you hire us to review a piece of property or a building in Abuja or Lagos, we will:
              </p>
              <ul className="list-disc pl-14 text-xs sm:text-sm text-zinc-600 space-y-2">
                <li>Send physical land surveyors out to confirm that the land is on solid, legal ground—not inside a swamp, a forest reserve, or mapped for future government roads.</li>
                <li>Visit the land registry offices to verify who actually owns the land on the original government paper.</li>
                <li>Read and correct all sales agreements and contracts so you aren&apos;t forced into unfair terms.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-zinc-100 rounded-sm">
                  <AlertCircle className="w-5 h-5 text-[#C5A059]" />
                </div>
                <h3 className="font-sans font-extrabold text-sm text-zinc-900 uppercase tracking-wide">2. Honest Realities About Land Searches</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pl-10">
                We perform our investigations based on the actual physical status of the ground and active files found at the Lagos and Abuja land offices. While we are extremely thorough and catch almost every red flag, some records can be kept secret or delayed by local offices. We always write down exactly what we find, honestly and clearly, so you can make your final choice safely.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-zinc-100 rounded-sm">
                  <Calendar className="w-5 h-5 text-[#C5A059]" />
                </div>
                <h3 className="font-sans font-extrabold text-sm text-zinc-900 uppercase tracking-wide">3. Booking & Payment Structure</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pl-10">
                Any fees you pay us are flat rates, agreed upon up front. There are never any hidden costs or surprise bills. If your property check is incomplete because a seller refuses to show us their papers, we will let you know instantly so you can stop dealing with them before spending more of your valuable capital.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-zinc-100 rounded-sm">
                  <Scale className="w-5 h-5 text-[#C5A059]" />
                </div>
                <h3 className="font-sans font-extrabold text-sm text-zinc-900 uppercase tracking-wide">4. Direct Legal Backing</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pl-10">
                Our legal team is fully registered and licensed to practice real estate law. We stand behind our work. If you need any part of this agreement explained over a WhatsApp audio call, a phone call, or a seated Zoom meeting, we are always here to help. Your peace of mind is what we care about most.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-200 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-950 hover:bg-[#C5A059] text-white hover:text-zinc-950 rounded-sm text-xs font-bold uppercase tracking-widest transition-all"
            >
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
