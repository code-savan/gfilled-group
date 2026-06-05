"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Do you sell properties or just check them?",
      answer: "Both. Gfilled Group has vetted and trusted properties that we list for sale. These are properties we have personally inspected and can stand behind. We also offer our checking service for any property you find on your own. Whether you buy from us or somewhere else, we make sure the property is safe and the paperwork is correct. We charge a transparent flat fee and do not take hidden commissions.",
    },
    {
      question: "How do you check if the land boundary is safe?",
      answer: "We send experienced, licensed surveyors to visit the property in person. They measure the exact boundaries with digital GPS tools. We then match these measurements with original city master plans at the Land Registry. This tells us instantly if the land overlaps a government road layout, belongs secretly to the state, or conflicts with neighboring plots before you pay.",
    },
    {
      question: "How do you protect buyers abroad from family disputes or double sales?",
      answer: "For Nigerians living in Canada, the US, the UK, or anywhere else, we serve as your hands and eyes on the ground. We check local court archives to make sure no family fights or legal claims are pending on the plot. We also speak with local residents next to the property to guarantee the seller actually has the right to sell it.",
    },
    {
      question: "What is your secure escrow, and how does it protect my money?",
      answer: "When you are ready to buy a home or land, we can hold your payment in a secure escrow account like a safebox. The money is locked away and only goes to the seller after our surveyor and legal team certify the property is 100% clean. If any issues are found during our check, your money is immediately returned to you in full. The seller never touches a penny until everything is verified.",
    },
    {
      question: "How long does the entire checking process take?",
      answer: "Most checks—including land registry searches, boundary measurements, and lawsuit checks—take between 5 to 7 business days. We then send you a digital report signed by our surveyor and our chief lawyer. It includes a clear, definite 'BUY' or 'WALK AWAY' recommendation so you can make your choice with absolute confidence.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-32 bg-white text-zinc-900 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Area: Title intro */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-[10px] font-mono font-black tracking-widest text-zinc-405 uppercase block">
              QUICK ANSWERS
            </span>
            <h2 className="font-sans text-2xl sm:text-5xl font-extrabold tracking-tight text-brand-dark uppercase leading-none">
              FREQUENTLY <br />
              ASKED <br />
              <span className="text-zinc-650 font-serif italic font-light tracking-wide normal-case text-xl sm:text-4xl block mt-1">
                    Questions.
              </span>
            </h2>
            <p className="text-zinc-700 text-sm leading-relaxed font-sans max-w-sm">
              Honest answers to common questions about buying property safely in Nigeria.
            </p>
            
            <div className="pt-6 relative hidden lg:block">
              <div className="p-5 rounded-sm bg-zinc-50 border border-zinc-200 space-y-3">
                <HelpCircle className="w-6 h-6 text-zinc-800" />
                <p className="text-xs font-bold text-zinc-900 uppercase tracking-wider">
                  Still Have Questions?
                </p>
                <p className="text-xs text-zinc-600 font-sans leading-relaxed">
                  Our team is ready to help. Reach out to us anytime.
                </p>
                <a 
                  href="#contact"
                  className="text-xs font-sans font-bold text-[#C5A059] hover:text-brand-dark flex items-center gap-1.5 pt-1 uppercase tracking-wider transition-colors"
                >
                  Contact Us →
                </a>
              </div>
            </div>
          </div>

          {/* Right Area: Premium minimalist Accordions */}
          <div className="lg:col-span-7 space-y-0 divide-y divide-zinc-200">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className="py-6 first:pt-0 last:pb-0"
                >
                  <button
                    onClick={() => handleToggle(index)}
                    className="w-full flex items-start justify-between text-left group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex gap-4">
                      {/* Premium Number indicator */}
                      <span className="text-[11px] font-mono font-bold text-zinc-400 group-hover:text-brand-dark transition-colors mt-1">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-sans font-extrabold uppercase tracking-widest text-zinc-900 md:text-sm group-hover:text-[#C5A059] transition-colors leading-relaxed">
                        {faq.question}
                      </span>
                    </div>

                    <div className="ml-4 flex-shrink-0 mt-0.5 p-1 rounded-sm border border-zinc-200 group-hover:border-zinc-400 group-hover:bg-zinc-100 transition-all">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 text-zinc-600" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-800" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs sm:text-xs leading-relaxed text-zinc-700 font-sans pl-8 pr-6 select-none leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
