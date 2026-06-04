"use client";

import { useState, useEffect } from "react";
import { ShieldCheck, Menu, X, ArrowRight, Scale, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when structural slider sheet is open
  useEffect(() => {
    if (isSheetOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSheetOpen]);

  // Main high-profile limited nav links for desktop
  const visibleNavItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Process", id: "how-it-works" },
  ];

  // Complete list for the aesthetic menu sheet
  const allNavItems = [
    { label: "Home", id: "home", desc: "Welcome to Gfilled Group" },
    { label: "About Us", id: "about", desc: "Our team and what we stand for" },
    { label: "Our Services", id: "services", desc: "Property verification and protection plans" },
    { label: "Why Choose Us", id: "why-choose", desc: "How we are different from agents" },
    { label: "How It Works", id: "how-it-works", desc: "Simple steps to secure your property" },
    { label: "Testimonials", id: "testimonials", desc: "Stories from real clients" },
    { label: "Contact Us", id: "contact", desc: "Book a free consultation" },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsSheetOpen(false);
  };

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-305 font-sans ${
          isScrolled
            ? "bg-white border-b border-zinc-200 py-3.5 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo Brand */}
            <div
              id="brand-logo-container"
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => onNavigate("home")}
            >
              <div className="relative flex items-center justify-center w-8 h-8 overflow-hidden transition-transform group-hover:scale-[1.02]">
                <Image src="https://pub-c0e4eba1bc8e4753be4abcf9f2033e98.r2.dev/logo.png" fill className="object-contain" alt="GFilled Logo" referrerPolicy="no-referrer" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className={`font-sans font-extrabold tracking-tight text-lg transition-colors duration-200 ${
                    isScrolled ? "text-zinc-950 group-hover:text-zinc-600" : "text-white group-hover:text-zinc-300"
                  }`}>
                    GFilled Group
                  </span>
                </div>
                <div className="h-[1px] w-full bg-[#C5A059] my-0.5" />
                <p className={`font-serif italic tracking-wide text-[11px] leading-tight transition-colors ${
                  isScrolled ? "text-zinc-650" : "text-zinc-200"
                }`}>
                  Realty & Legal Practice
                </p>
              </div>
            </div>

            {/* Desktop Navigation - Adapts to Scroll */}
            <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
              {visibleNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`text-xs font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer relative py-1 ${
                    activeSection === item.id
                      ? isScrolled ? "text-zinc-950" : "text-white"
                      : isScrolled ? "text-zinc-500 hover:text-zinc-950" : "text-zinc-200 hover:text-white"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNavLine"
                      className={`absolute bottom-0 left-0 right-0 h-[1.5px] transition-colors duration-200 ${
                        isScrolled ? "bg-[#C5A059]" : "bg-white"
                      }`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Action Group & Menu Trigger */}
            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href="mailto:legal@gfilled.com"
                className={`hidden lg:flex items-center gap-2 text-[10px] font-mono font-bold tracking-wider transition-colors ${
                  isScrolled ? "text-zinc-500 hover:text-zinc-950" : "text-zinc-200 hover:text-white"
                }`}
              >
                <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>legal@gfilled.com</span>
              </a>

              <button
                onClick={() => onNavigate("contact")}
                className={`hidden sm:inline-flex items-center px-5 py-2.5 text-[10px] font-black uppercase tracking-widest rounded-sm transition-all duration-205 cursor-pointer border ${
                  isScrolled
                    ? "bg-zinc-950 text-white hover:bg-zinc-800 border-zinc-900"
                    : "bg-white text-zinc-950 hover:bg-[#C5A059] hover:text-zinc-950 border-white/20"
                }`}
              >
                Free Consultation
              </button>

              {/* Aesthetic Sheet Menu Trigger */}
              <button
                id="aesthetic-menu-trigger"
                onClick={() => setIsSheetOpen(true)}
                className={`p-3 rounded-sm border transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer shadow-sm ${
                  isScrolled
                    ? "bg-zinc-950 text-white border-zinc-905 hover:bg-zinc-800"
                    : "bg-white/10 text-white border-white/20 hover:bg-white hover:text-zinc-950"
                }`}
                aria-label="Toggle Complete Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-out Sheet Drawer (The Sheet) */}
      <AnimatePresence>
        {isSheetOpen && (
          <>
            {/* Backdrop Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSheetOpen(false)}
              className="fixed inset-0 bg-zinc-950/40 backdrop-blur-md z-50 cursor-pointer"
            />

            {/* Aesthetic sheet content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="fixed right-0 top-0 bottom-0 h-screen w-[100vw] sm:w-[500px] bg-white border-l border-zinc-200 z-50 shadow-2xl p-8 md:p-12 flex flex-col justify-between overflow-y-auto overscroll-contain"
            >
              {/* Top Row & Close Button */}
              <div>
                <div className="flex items-center justify-between pb-8 border-b border-zinc-105">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 overflow-hidden flex items-center justify-center animate-fade-in animate-pulse relative">
                      <Image src="https://pub-c0e4eba1bc8e4753be4abcf9f2033e98.r2.dev/logo.png" fill className="object-contain" alt="GFilled Logo" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <span className="font-sans font-bold tracking-tight text-base text-zinc-950 block">
                        GFilled Group
                      </span>
                      <div className="h-[1px] w-full bg-[#C5A059] my-0.5" />
                      <span className="font-serif italic tracking-wide text-[10.5px] leading-tight text-zinc-500 block">
                        Realty & Legal Practice
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsSheetOpen(false)}
                    className="p-2.5 rounded-sm border border-zinc-200 text-zinc-500 hover:text-zinc-950 hover:bg-stone-50 transition-colors focus:outline-none cursor-pointer"
                  >
                    <X className="w-4.5 h-4.5" />
                  </button>
                </div>

                {/* Subtitle intro */}
                <div className="mt-8 mb-6">
                  <span className="text-[10px] font-mono tracking-widest font-black uppercase text-[#C5A059] block mb-1">
                    MENU
                  </span>
                  <p className="text-zinc-500 text-xs leading-relaxed font-sans">
                    Please select a section below to learn more about how we can help you buy property safely in Nigeria.
                  </p>
                </div>

                {/* Navigation Links */}
                <div className="space-y-4">
                  {allNavItems.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => handleLinkClick(item.id)}
                      className="group w-full text-left p-3.5 rounded-sm border border-zinc-100 bg-stone-50/50 hover:bg-stone-50 hover:border-zinc-300 transition-all duration-300 flex items-start gap-4 cursor-pointer"
                    >
                      <div className="text-[11px] font-mono font-bold text-zinc-400 group-hover:text-[#C5A059] mt-0.5">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <div className="flex-1 space-y-0.5">
                        <div className="text-xs uppercase tracking-wider font-bold text-zinc-800 group-hover:text-zinc-950 transition-colors flex items-center justify-between">
                          {item.label}
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#C5A059] transition-all transform group-hover:translate-x-1" />
                        </div>
                        <p className="text-[11px] text-[#C5A059] leading-normal font-sans text-left">
                          {item.desc}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom legal stamp */}
              <div className="pt-8 border-t border-zinc-100 space-y-4 text-xs">
                <div className="flex items-center gap-2 text-zinc-700 font-mono text-[11px]">
                  <Scale className="w-4 h-4 text-[#C5A059]" />
                  <span>Gfilled Group</span>
                </div>
                <p className="text-[10px] text-zinc-400 leading-relaxed font-sans">
                  Valencia Garden Estate, Louisiana 2, The White House, Lokogoma, Abuja.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
