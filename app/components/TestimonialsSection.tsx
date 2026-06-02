"use client";

import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dr. Jude Okonjo",
      role: "Houston, TX (US Diaspora Client)",
      image: "https://picsum.photos/seed/jude/150/150",
      quote: "Buying property in Lagos from abroad used to feel like playing roulette. I lost ₦18 Million in 2021 relying on family. With Gfilled, I acquired two plots in Lekki Phase 1 completely remote. Their licensed surveyor found a 15-meter overlap on one plot, saving me from a lifelong boundary litigation. Gfilled represents buyer sanity.",
    },
    {
      name: "Mrs. Adebisi Alao",
      role: "Senior Director, Financial Services (Lagos)",
      image: "https://picsum.photos/seed/adebisi/150/150",
      quote: "Sellers always pressure you saying 'The C of O is in-process, pay now.' Gfilled’s Due Diligence report proved the master planning files were entirely under caution by the FCDA in Abuja. Paying their flat fee of ₦270,000 stopped us from throwing ₦85 Million into a developmental sinkhole. Unbelievable eye for detail.",
    },
    {
      name: "Alhaji Bello Mohammed",
      role: "CEO, Prestige Homes (Abuja Real Estate Developer)",
      image: "https://picsum.photos/seed/bello_dev/150/150",
      quote: "We don't negotiate with buyer agents who demand fat kickbacks. We register our layouts with Gfilled Group. Their legal division audits our ownership indexes, so our clients acquire titles with 100% certainty. It makes Gfilled listings the safest real estate in the country.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-16 sm:py-32 bg-white text-zinc-900 relative border-t border-zinc-200">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12 sm:mb-20">
          <span className="text-[10px] font-mono font-black tracking-widest text-zinc-400 uppercase block">
            CLIENT AUDIT REVIEWS
          </span>
          <h2 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 uppercase leading-tight">
            Security Stories. <br />
            <span className="text-zinc-650 font-serif italic font-light tracking-wide normal-case text-2xl sm:text-4xl block mt-1">
              Tested in Registries, Trusted by Buyers.
            </span>
          </h2>
          <p className="text-zinc-700 text-sm leading-relaxed max-w-xl mx-auto font-sans">
            Over 240 diaspora and domestic clients have secured their real estate legacy using our flat-fee independent due diligence services.
          </p>
        </div>

        {/* Carousel Framer Container */}
        <div className="relative bg-zinc-55 border border-zinc-200 rounded-sm p-5 sm:p-8 md:p-12 shadow-sm min-h-[350px] sm:min-h-[400px] flex flex-col justify-between">
          <Quote className="absolute top-4 left-4 sm:top-8 sm:left-8 w-8 h-8 sm:w-12 sm:h-12 text-zinc-150 pointer-events-none opacity-50 sm:opacity-100" />

          {/* Active Testimonial Projection with AnimatePresence */}
          <div className="relative overflow-hidden flex-1 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-left relative z-10"
              >
                {/* Gold Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                  ))}
                </div>

                {/* Quote details */}
                <p className="text-zinc-800 text-sm md:text-base leading-relaxed italic font-sans font-medium">
                  &quot;{current.quote}&quot;
                </p>

                {/* Client Meta block */}
                <div className="flex items-center gap-4 pt-4 border-t border-zinc-150">
                  <div className="relative w-12 h-12 rounded-sm overflow-hidden border border-zinc-200 bg-zinc-100 flex-shrink-0">
                    <Image
                      src={current.image}
                      alt={current.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-sans font-extrabold text-sm text-zinc-950 uppercase tracking-wide">
                      {current.name}
                    </h4>
                    <p className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase font-black">
                      {current.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigators Row and Dots */}
          <div className="flex items-center justify-between pt-8 border-t border-zinc-105 mt-6 relative z-20">
            {/* Slide Index Indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 transition-all duration-300 rounded-sm cursor-pointer ${
                    activeIndex === i ? "w-8 bg-zinc-950" : "w-2 bg-zinc-300 hover:bg-zinc-400"
                  }`}
                  aria-label={`Jump to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Left/Right Button pair */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-3 bg-white hover:bg-zinc-100 rounded-sm border border-zinc-200 text-zinc-900 transition-colors shadow-xs cursor-pointer focus:outline-none"
                aria-label="Previous testimony"
              >
                <ChevronLeft className="w-4.5 h-4.5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 bg-zinc-950 hover:bg-zinc-800 rounded-sm border border-zinc-900 text-white transition-colors shadow-xs cursor-pointer focus:outline-none"
                aria-label="Next testimony"
              >
                <ChevronRight className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
