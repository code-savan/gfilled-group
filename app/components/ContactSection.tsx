"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, FileText, PhoneCall } from "lucide-react";
import { motion } from "motion/react";

interface ContactSectionProps {
  prefilledPackage?: string;
}

export default function ContactSection({ prefilledPackage }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    diasporaLocation: "local",
    selectedService: prefilledPackage || "free-call",
    propertyRegion: "fct",
    propertyDetails: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // If a package gets selected elsewhere, we synchronize it
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email) {
      alert("Please provide your name, email, and telephone number to schedule verification.");
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-32 bg-white text-zinc-900 relative border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Context Card & Office Credentials */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] font-mono tracking-widest font-black uppercase text-zinc-400 block">
                GET IN TOUCH
              </span>
              <h2 className="font-sans text-2xl sm:text-5xl font-extrabold tracking-tight text-brand-dark uppercase leading-tight">
                Lets Talk About <br />
                <span className="text-zinc-650 font-serif italic font-light tracking-wide normal-case text-xl sm:text-4xl block mt-1">
                  Your Property Safety.
                </span>
              </h2>
              <p className="text-zinc-700 text-sm leading-relaxed font-sans mt-4">
                Please do not pay any deposits or sign any contracts before we check the paperwork. Our legal team will visit the government land offices to protect your money.
              </p>
            </div>

            {/* Direct Contact Indices */}
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-zinc-100 border border-zinc-200 rounded-sm text-brand-dark">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs sm:text-sm text-brand-dark uppercase tracking-wide">Call or WhatsApp Us</h4>
                  <p className="text-sm text-zinc-700 font-mono font-bold mt-1">09135213710</p>
                  <p className="text-[10px] text-zinc-400 font-mono">WhatsApp: 08165459779 | Mon–Sat: 8am – 6pm (GMT +1)</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-zinc-100 border border-zinc-200 rounded-sm text-brand-dark">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs sm:text-sm text-brand-dark uppercase tracking-wide">Email Us</h4>
                  <p className="text-sm text-zinc-700 font-mono font-bold mt-1">legal@gfilled.com</p>
                  <p className="text-[10px] text-zinc-400 font-sans">Send your documents for legal review.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-zinc-100 border border-zinc-200 rounded-sm text-brand-dark">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs sm:text-sm text-brand-dark uppercase tracking-wide">Our Office</h4>
                  <p className="text-xs text-zinc-700 mt-1 font-semibold leading-relaxed font-sans">
                    Valencia Garden Estate, Louisiana 2, The White House, Lokogoma, Abuja.
                  </p>
                </div>
              </div>
            </div>

            {/* Micro warning note */}
            <div className="p-6 rounded-sm bg-brand-dark text-white space-y-3.5 shadow-sm border border-blue-900">
              <div className="flex items-center gap-2 text-[#C5A059]">
                <ShieldCheck className="w-5 h-5" />
                <h4 className="font-sans font-extrabold text-xs uppercase tracking-wider">
                  FOLLOW US
                </h4>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.instagram.com/gfilled_group/" target="_blank" rel="noopener noreferrer" className="text-[11px] text-zinc-300 hover:text-[#C5A059] transition-colors font-sans underline underline-offset-2">Instagram</a>
                <a href="https://web.facebook.com/people/Gfilled-Gr/" target="_blank" rel="noopener noreferrer" className="text-[11px] text-zinc-300 hover:text-[#C5A059] transition-colors font-sans underline underline-offset-2">Facebook</a>
                <a href="https://www.tiktok.com/@gfilledgroup" target="_blank" rel="noopener noreferrer" className="text-[11px] text-zinc-300 hover:text-[#C5A059] transition-colors font-sans underline underline-offset-2">TikTok</a>
                <a href="https://www.linkedin.com/in/gfilled-group-8b6148363" target="_blank" rel="noopener noreferrer" className="text-[11px] text-zinc-300 hover:text-[#C5A059] transition-colors font-sans underline underline-offset-2">LinkedIn</a>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Interactive Form (Fresha UI: Minimalistic, High-Contrast inputs) */}
          <div className="lg:col-span-7">
            <div className="rounded-sm border border-zinc-200 bg-white p-4 sm:p-10 shadow-sm">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-zinc-100 pb-5 mb-6">
                    <h3 className="font-sans font-bold text-lg text-brand-dark uppercase tracking-tight">
                      Book a Free Consultation
                    </h3>
                    <p className="text-xs text-zinc-500 mt-1 font-sans">
                      Fill in your details and we will get back to you to discuss your property safety needs.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-brand-dark font-mono">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Dr. Charles Nwosu"
                        className="w-full p-3.5 rounded-sm border border-zinc-200 bg-zinc-50/30 text-brand-dark text-xs font-sans focus:border-brand-dark focus:bg-white focus:outline-none transition-all"
                      />
                    </div>

                    {/* Residence Selection */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-brand-dark font-mono">
                        Client Residence
                      </label>
                      <select
                        name="diasporaLocation"
                        value={formData.diasporaLocation}
                        onChange={handleInputChange}
                        className="w-full p-3.5 rounded-sm border border-zinc-200 bg-zinc-50/30 text-brand-dark text-xs font-sans focus:border-brand-dark focus:bg-white focus:outline-none transition-all"
                      >
                        <option value="local">Inside Nigeria (Local Buyer)</option>
                        <option value="uk">United Kingdom (UK Diaspora)</option>
                        <option value="us">United States (US Diaspora)</option>
                        <option value="ca">Canada (CA Diaspora)</option>
                        <option value="eu">Europe (EU Diaspora)</option>
                        <option value="other">Other Global Locations</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-brand-dark font-mono">
                        Primary Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. charles@nwosu.org"
                        className="w-full p-3.5 rounded-sm border border-zinc-200 bg-zinc-50/30 text-brand-dark text-xs font-sans focus:border-brand-dark focus:bg-white focus:outline-none transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-brand-dark font-mono">
                        Phone Number (WhatsApp Preferred) *
                      </label>
                      <input
                        type="text"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +44 7911 123456"
                        className="w-full p-3.5 rounded-sm border border-zinc-200 bg-zinc-50/30 text-brand-dark text-xs font-sans focus:border-brand-dark focus:bg-white focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Service Target Selection */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-brand-dark font-mono">
                        Service Needed
                      </label>
                      <select
                        name="selectedService"
                        value={formData.selectedService}
                        onChange={handleInputChange}
                        className="w-full p-3.5 rounded-sm border border-zinc-200 bg-zinc-50/30 text-brand-dark text-xs font-sans focus:border-brand-dark focus:bg-white focus:outline-none transition-all"
                      >
                        <option value="free-call">Free 15 Minute Legal Consultation (\u20A60)</option>
                        <option value="essential">Essential Verification Plan (\u20A6100,000)</option>
                        <option value="standard">Standard Due Diligence Plan (\u20A6250,000)</option>
                        <option value="full-safety">Full Safety & Transaction Protection (\u20A6350,000)</option>
                      </select>
                    </div>

                    {/* Land Coordinate Registry region */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-brand-dark font-mono">
                        Property Registry Location
                      </label>
                      <select
                        name="propertyRegion"
                        value={formData.propertyRegion}
                        onChange={handleInputChange}
                        className="w-full p-3.5 rounded-sm border border-zinc-200 bg-zinc-50/30 text-brand-dark text-xs font-sans focus:border-brand-dark focus:bg-white focus:outline-none transition-all"
                      >
                        <option value="fct">FCT Abuja (AGIS Verifiable)</option>
                        <option value="lagos">Lagos State (Lands Bureau)</option>
                        <option value="southwest">South West (Oyo, Ogun, Ondo, etc.)</option>
                        <option value="southeast">South East / South South</option>
                        <option value="north">Northern States</option>
                        <option value="other">Other Locations in Nigeria</option>
                      </select>
                    </div>
                  </div>

                  {/* Coordinates information */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-brand-dark font-mono">
                      Property survey coordinates, beacon numbers, or estate references
                    </label>
                    <textarea
                      name="propertyDetails"
                      rows={3}
                      value={formData.propertyDetails}
                      onChange={handleInputChange}
                      placeholder="e.g. Beacon coordinates on survey plan, allocation number, or developer details if known."
                      className="w-full p-3.5 rounded-sm border border-zinc-200 bg-zinc-50/30 text-brand-dark text-xs font-sans focus:border-brand-dark focus:bg-white focus:outline-none transition-all leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-4 sm:px-6 bg-brand-dark hover:bg-blue-800 text-white font-black tracking-widest text-[10px] sm:text-xs uppercase rounded-sm transition-all cursor-pointer flex items-center justify-center gap-2 border border-blue-900 leading-tight"
                  >
                    <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" />
                    Book & Secure Representation
                  </button>
                </form>
              ) : (
                // Checkout Success representation
                <div className="text-center py-10 space-y-6">
                  <div className="w-16 h-16 bg-zinc-100 border border-zinc-200 rounded-sm flex items-center justify-center mx-auto text-brand-dark shadow-sm">
                    <CheckCircle2 className="w-9 h-9 text-[#C5A059]" />
                  </div>
                  
                  <div className="space-y-2 max-w-lg mx-auto">
                    <h3 className="font-sans text-2xl font-extrabold text-brand-dark uppercase tracking-tight">
                      Protection checkout complete
                    </h3>
                    <p className="text-xs text-zinc-650 leading-relaxed font-sans">
                      Thank you, <b className="text-brand-dark">{formData.fullName}</b>. Your booking parameters are securely compiled. An advisor from <b>GFilled Group</b> will review registry indexes and reach you shortly on <span className="font-mono text-brand-dark font-bold underline">{formData.phone}</span>.
                    </p>
                  </div>

                  <div className="p-6 rounded-sm border border-zinc-200 bg-zinc-50 text-left space-y-3 text-xs">
                    <p className="font-bold text-zinc-900 uppercase font-mono tracking-wider text-[10px]">
                      Scheduled Checkout Parameters:
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-zinc-600 font-sans">
                      <span>Selected Residence:</span>
                      <span className="font-bold text-brand-dark uppercase">{formData.diasporaLocation}</span>
                      
                      <span>Protection level:</span>
                      <span className="font-bold text-brand-dark uppercase">{formData.selectedService}</span>
                      
                      <span>Target Registry:</span>
                      <span className="font-bold text-brand-dark uppercase">{formData.propertyRegion}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex py-3.5 px-6 border border-zinc-300 rounded-sm text-xs font-black uppercase tracking-widest text-zinc-700 hover:text-brand-dark hover:bg-zinc-50 transition-colors"
                  >
                    Configure Another Search
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
