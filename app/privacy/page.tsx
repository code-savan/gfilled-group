"use client";

import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-amber-100 selection:text-amber-950">
      {/* Sticky Nav */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-zinc-500 hover:text-brand-dark transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest">Back</span>
          </Link>
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Privacy Policy</span>
        </div>
      </nav>

      {/* Header */}
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="max-w-3xl mx-auto px-6 py-12 sm:py-20 text-center space-y-4">
          <span className="text-[10px] font-mono tracking-widest font-black uppercase text-[#C5A059] block">
            PRIVACY GUARANTEE
          </span>
          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold uppercase tracking-tight leading-tight text-brand-dark">
            How We Protect Your Information
          </h1>
          <p className="font-serif italic text-zinc-500 text-base sm:text-lg max-w-xl mx-auto">
            &ldquo;No legal speak. Simply telling you how we keep your personal data and documents safe.&rdquo;
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Intro Card */}
          <div className="flex gap-4 items-start bg-zinc-50 p-5 sm:p-6 rounded-sm border border-zinc-200">
            <ShieldCheck className="w-8 h-8 text-[#C5A059] shrink-0 mt-1" />
            <div className="space-y-1">
              <h2 className="font-sans font-bold text-sm text-brand-dark uppercase tracking-wider">Our Simple Promise</h2>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                When you want to buy property in Nigeria, you have to share private papers, like survey plans, draft contracts, and ID documents. We promise to guard these documents like our own home. We do not sell your details, and we only use them to confirm your land is safe.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-zinc-100 rounded-sm">
                  <FileText className="w-5 h-5 text-[#C5A059]" />
                </div>
                <h3 className="font-sans font-extrabold text-sm text-zinc-900 uppercase tracking-wide">1. What Paperwork We Ask For & Why</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pl-10">
                To keep you safe from property scams, we need to inspect the land. We ask you for the <b>survey plan</b>, the <b>title deeds (such as a Certificate of Occupancy or Deed of Assignment)</b>, and details about the seller. This allows our team to visit the relevant land registry across Nigeria and verify who the true owner is. We only ask for what is absolutely necessary to do this job.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-zinc-100 rounded-sm">
                  <Lock className="w-5 h-5 text-[#C5A059]" />
                </div>
                <h3 className="font-sans font-extrabold text-sm text-zinc-900 uppercase tracking-wide">2. Who Can See Your Private Documents?</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pl-10">
                Only the licensed lawyers, registered surveyors, and active managers working directly on your verification can see your files. We store all sent files in secure, locked digital folders with professional computer encryption. We will never share your papers with any seller, developer, or outside third party without your clear, written permission first.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-zinc-100 rounded-sm">
                  <Eye className="w-5 h-5 text-[#C5A059]" />
                </div>
                <h3 className="font-sans font-extrabold text-sm text-zinc-900 uppercase tracking-wide">3. You Are in Complete Control</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pl-10">
                At any time, you can ask us to show you exactly what records we have for you, correct any mistakes, or completely delete your documents from our system once your purchase verification is safely finished. Simply write to us and say, &ldquo;Please remove my records,&rdquo; and we will take care of it right away.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-zinc-100 rounded-sm">
                  <Mail className="w-5 h-5 text-[#C5A059]" />
                </div>
                <h3 className="font-sans font-extrabold text-sm text-zinc-900 uppercase tracking-wide">4. Contact Our Privacy Officer</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pl-10">
                If you or an elder family member have any questions about how your papers are handled, or need help reading this, please send an email to <b className="text-zinc-800">legal@gfilled.com</b> or call our Abuja main desk directly. We are happy to sit down or talk over WhatsApp to explain everything in plain, comfortable language.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-200 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-dark hover:bg-[#C5A059] text-white hover:text-brand-dark rounded-sm text-xs font-bold uppercase tracking-widest transition-all"
            >
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
