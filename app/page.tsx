"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import TestimonialsSection from "./components/TestimonialsSection";
import FaqSection from "./components/FaqSection";
import ContactSection from "./components/ContactSection";
import ChatWidget from "./components/ChatWidget";
import Footer from "./components/Footer";
import { useLenisScroll } from "./components/ScrollManager";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [prefilledPackage, setPrefilledPackage] = useState("free-call");
  const { scrollTo } = useLenisScroll();

  // Handle smooth scroll to specific section
  const handleNavigate = (sectionId: string) => {
    scrollTo(sectionId);
    setActiveSection(sectionId);
  };

  // Safe callback when selecting direct pricing cards or checklist reviews
  const handleSelectPackage = (packageName: string) => {
    // Map human readable card package names directly to our form select tags
    let formValue = "free-call";
    if (packageName.includes("Title") || packageName.includes("Basic")) {
      formValue = "basic-title";
    } else if (packageName.includes("Due") || packageName.includes("Compliance") || packageName.includes("Custom")) {
      formValue = "compliance-pack";
    } else if (packageName.includes("Full") || packageName.includes("Escrow")) {
      formValue = "full-escrow";
    }

    setPrefilledPackage(formValue);
    
    // Smoothly scroll down to contact section
    handleNavigate("contact");
  };

  // Scroll spy to update Navbar active indicator on client-side
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ["home", "about", "services", "why-choose", "how-it-works", "testimonials", "faq", "contact"];
      const scrollPosition = window.scrollY + 160;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <main id="gfilled-app-main-view" className="relative min-h-screen bg-white overflow-x-hidden selection:bg-amber-100 selection:text-amber-950">
      {/* Translucent Premium Sticky Navbar */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Hero Header Presentation */}
      <Hero 
        onVerifyClick={() => handleSelectPackage("Due Diligence & Compliance Package")} 
        onConsultClick={() => handleSelectPackage("Free 15-Minute Legal Consultation")} 
      />

      {/* About Section: Crisis Diagnosis & Team Credentials */}
      <About />

      {/* Services Grid with Interactive Custom Plan Price Builder */}
      <ServicesSection onBookConsultation={handleSelectPackage} />

      {/* Why Choose Us Contrast Matrix (The Blind Way vs. Secured) */}
      <WhyChooseUs />

      {/* Step-by-Step Security Pipeline Blueprint */}
      <HowItWorks />

      {/* Rotating Testimonial Patron Cards */}
      <TestimonialsSection />

      {/* Premium Accordion Inquiries section */}
      <FaqSection />

      {/* Interactive Booking & Document Filing Forms */}
      <ContactSection prefilledPackage={prefilledPackage} />

      {/* Floating AI Real Estate Legal Advisory Messenger */}
      <ChatWidget />

      {/* Footer & Comprehensive Compliance Disclaimers */}
      <Footer onNavigate={handleNavigate} />
    </main>
  );
}
