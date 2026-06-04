"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, ShieldCheck, Scale, ArrowRight, Phone, FileText, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

interface Message {
  role: "user" | "assistant";
  content: string;
  isPreset?: boolean;
  whatsappLink?: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Welcome to Gfilled Group. I am here to help you buy property safely in Nigeria.\n\nAre you looking to buy land or a home in Lagos or Abuja? Tell me about the property and I will explain how we can help you check it.",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const listEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to latest chats
  useEffect(() => {
    if (listEndRef.current) {
      listEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const presetQueries = [
    { label: "What is a C of O?", key: "c_of_o", query: "What is a Certificate of Occupancy and why is it important?" },
    { label: "Buying From Abroad", key: "diaspora", query: "What are the biggest risks for diaspora buyers in Nigeria?" },
    { label: "How You Check", key: "abuja", query: "How does Gfilled check properties in Lagos and Abuja?" },
    { label: "Prices", key: "due_diligence", query: "How much does your property checking service cost?" },
  ];

  const PREDEFINED_ANSWERS: Record<string, { text: string; whatsappLink: string }> = {
    c_of_o: {
      text: "A Certificate of Occupancy (C of O) is the main land document in Nigeria. It proves who legally owns the property.\n\nWe check if the C of O is real by visiting the government land office in person. Many fake documents look real on paper, so a physical check is very important.\n\nTo get started, please chat with us on WhatsApp or fill the booking form below.",
      whatsappLink: "https://wa.me/2348165459779?text=Hello%20GFilled%2C%20I%20would%20like%20to%20verify%20a%20Certificate%20of%20Occupancy%20for%20a%20property."
    },
    diaspora: {
      text: "Buying property from abroad comes with unique risks:\n\n- Family members may buy poor quality land without proper checks.\n- Sellers may promise documents that do not actually exist.\n- The same land may be sold to multiple people.\n\nWe help diaspora buyers avoid these problems by checking everything in person.\n\nPlease click below to chat on WhatsApp or fill our booking form.",
      whatsappLink: "https://wa.me/2348165459779?text=Hello%20GFilled%2C%20I%20am%20a%20diaspora%20buyer%20and%20want%20to%20discuss%20buying%20property%20safely."
    },
    abuja: {
      text: "We check properties by going directly to the government land offices in Abuja (AGIS) and Lagos (Lands Bureau).\n\nHere is what we do:\n1. Check the official ownership records at the registry.\n2. Confirm the land is not marked for government use.\n3. Visit the property with a surveyor to measure the boundaries.\n\nTo start, chat with us on WhatsApp or fill the booking form.",
      whatsappLink: "https://wa.me/2348165459779?text=Hello%20GFilled%2C%20I%20need%20a%20property%20check%20in%20Abuja%20or%20Lagos."
    },
    due_diligence: {
      text: "Our complete checking package costs a flat ₦270,000 and includes:\n\n- A surveyor visiting the land with GPS equipment.\n- Full checks at the government land registry.\n- History check for court disputes or problems.\n- A signed safety report from our team.\n\nTo get started, chat with us on WhatsApp or fill the booking form below.",
      whatsappLink: "https://wa.me/2348165459779?text=Hello%20GFilled%2C%20I%20want%20to%20book%20the%20full%20property%20checking%20package."
    }
  };

  const getMatchedPresetKey = (query: string): string | null => {
    const q = query.toLowerCase();
    if (q.includes("c of o") || q.includes("certificate of occupancy")) {
      return "c_of_o";
    }
    if (q.includes("diaspora") || q.includes("scam") || q.includes("remote") || q.includes("fraud")) {
      return "diaspora";
    }
    if (q.includes("abuja") || q.includes("agis") || q.includes("registry") || q.includes("lagos") || q.includes("lands bureau")) {
      return "abuja";
    }
    if (q.includes("fee") || q.includes("package") || q.includes("price") || q.includes("cost") || q.includes("due diligence") || q.includes("270")) {
      return "due_diligence";
    }
    return null;
  };

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    // Add user message immediately
    const userMessage: Message = { role: "user", content: textToSend };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    // Simulate standard response delay (500ms)
    setTimeout(() => {
      const matchKey = getMatchedPresetKey(textToSend);

      if (matchKey && PREDEFINED_ANSWERS[matchKey]) {
        // Preset answer found
        const ans = PREDEFINED_ANSWERS[matchKey];
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: ans.text,
            isPreset: true,
            whatsappLink: ans.whatsappLink,
          },
        ]);
        setIsLoading(false);
      } else {
        // Custom inquiry - redirect to WhatsApp with custom text pre-filled
        const whatsappUrl = `https://wa.me/2348165459779?text=${encodeURIComponent(`Hello GFilled, I have an inquiry regarding: ${textToSend}`)}`;
        
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: `I am transferring you directly to our verified legal advisory desk on WhatsApp to answer your custom inquiry regarding:\n\n"${textToSend}"\n\nIf the browser did not redirect you automatically, please click the button below to reach us directly.`,
            isPreset: true,
            whatsappLink: whatsappUrl,
          },
        ]);
        setIsLoading(false);

        // Auto redirect window
        try {
          window.open(whatsappUrl, "_blank");
        } catch (e) {
          console.warn("Popup blocked, fallback to manual click instructions.", e);
        }
      }
    }, 500);
  };

  return (
    <div id="gfilled-ai-concierge-widget" className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            id="chat-trigger-bubble"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-3 px-5 py-4 rounded-sm bg-zinc-950 text-white shadow-xl border border-zinc-900 group cursor-pointer focus:outline-none transition-transform active:scale-95 hover:scale-[1.02]"
          >
            <div className="relative">
              <MessageSquare className="w-5.5 h-5.5 text-[#C5A059] group-hover:rotate-6 transition-transform" />
              <span className="absolute -top-1.5 -right-1.5 w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-[9px] font-bold tracking-widest font-mono uppercase text-[#C5A059]">
                Gfilled Group
              </p>
              <p className="text-xs font-bold text-stone-100 font-sans">Chat With Us</p>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="chat-console-box"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            className="w-[92vw] sm:w-[420px] h-[580px] bg-white border border-zinc-200 rounded-sm shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Header - Vibe updated to clean, high contrast with gold details */}
            <div className="px-5 py-4.5 bg-zinc-950 border-b border-zinc-900 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-8.5 h-8.5 overflow-hidden flex items-center justify-center relative">
                  <Image src="https://pub-c0e4eba1bc8e4753be4abcf9f2033e98.r2.dev/logo.png" fill className="object-contain" alt="GFilled Logo" referrerPolicy="no-referrer" />
                </div>
                <div className="text-left">
                  <h3 className="font-sans font-black text-xs uppercase tracking-wider flex items-center gap-2">
                    Gfilled Group
                  </h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-sm bg-emerald-500 animate-pulse"></span>
                    <p className="text-[10px] text-zinc-400 font-mono tracking-wider uppercase font-bold">
                      Online and Ready to Help
                    </p>
                  </div>
                </div>
              </div>

              <button
                id="chat-console-close"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-sm text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors focus:outline-none cursor-pointer"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Chat List Views */}
            <div className="flex-1 p-5 overflow-y-auto space-y-5 bg-zinc-50/50 text-zinc-900 scrollbar-thin">
              {messages.map((m, idx) => {
                const isUser = m.role === "user";
                return (
                  <div
                    key={idx}
                    className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`p-4 rounded-sm text-xs leading-relaxed ${
                        isUser
                          ? "bg-zinc-950 text-white ml-auto max-w-[85%] text-left border border-zinc-900 shadow-sm"
                          : "bg-white text-zinc-900 mr-auto max-w-[92%] text-left border border-zinc-200 shadow-sm"
                      }`}
                    >
                      {/* Structured & formatted text line blocks with no md markers */}
                      <p className="whitespace-pre-wrap select-text font-sans">
                        {m.content}
                      </p>

                      {/* Interactive Choice Action Buttons for answers */}
                      {!isUser && (idx > 0 || m.isPreset) && (
                        <div className="mt-4 pt-3.5 border-t border-zinc-150 flex flex-col gap-2">
                          <p className="text-[9px] font-bold text-zinc-500 uppercase font-mono tracking-wider text-left">
                            Next Steps:
                          </p>
                          <div className="flex flex-col sm:flex-row gap-2">
                            <a
                              href={m.whatsappLink || "https://wa.me/2348165459779?text=Hello%20GFilled%2C%20I%20would%20like%20to%20consult%20regarding%20some%20property%20safety%20checks."}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 py-2 px-2 bg-zinc-950 hover:bg-[#C5A059] text-white hover:text-zinc-950 rounded-sm text-[10px] font-bold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm border border-zinc-900"
                            >
                              <Phone className="w-3.5 h-3.5" />
                              Chat on WhatsApp
                            </a>
                            <button
                              type="button"
                              onClick={() => {
                                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
                                setIsOpen(false);
                              }}
                              className="flex-1 py-2 px-2 border border-zinc-300 hover:border-zinc-950 text-zinc-800 hover:text-zinc-950 rounded-sm text-[10px] font-bold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-1.5 cursor-pointer bg-white"
                            >
                              <FileText className="w-3.5 h-3.5 text-zinc-650" />
                              Fill Booking Form
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="p-3.5 bg-white border border-zinc-200 rounded-sm flex items-center gap-2 shadow-xs">
                    <Loader2 className="w-4 h-4 text-[#C5A059] animate-spin" />
                    <span className="text-zinc-500 text-[10px] uppercase font-mono tracking-widest font-bold">
                      Finding the best answer...
                    </span>
                  </div>
                </div>
              )}

              <div ref={listEndRef} />
            </div>

            {/* Suggested Preset Queries Horizontal Tray */}
            <div className="px-4 py-3 border-t border-zinc-150 bg-white overflow-x-auto whitespace-nowrap flex gap-2 scrollbar-none select-none">
              {presetQueries.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSendMessage(p.query)}
                  className="inline-block px-3.5 py-2 rounded-sm border border-zinc-200 bg-zinc-50 text-[10px] font-bold uppercase tracking-wider text-zinc-700 hover:bg-zinc-950 hover:text-white hover:border-zinc-950 transition-colors cursor-pointer"
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Direct WhatsApp Call banner and message form input */}
            <div className="p-4 bg-white border-t border-zinc-200">
              <div className="mb-2.5 flex items-center justify-between">
                <span className="text-[9px] font-mono font-bold text-zinc-400 uppercase tracking-widest">
                  WhatsApp:
                </span>
                <a
                  href="https://wa.me/2348165459779"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] font-bold text-[#C5A059] hover:text-[#9E7F43] transition-colors uppercase tracking-wider font-mono cursor-pointer"
                >
                  <Phone className="w-3 h-3" />
                  +234 816 545 9779
                </a>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputMessage);
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask us anything about buying property..."
                  className="flex-1 p-3.5 rounded-sm bg-zinc-50 border border-zinc-205 text-zinc-950 text-xs font-sans focus:border-zinc-950 focus:bg-white focus:outline-none transition-all"
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputMessage.trim()}
                  className="p-3.5 bg-zinc-950 disabled:bg-zinc-100 text-white disabled:text-zinc-400 rounded-sm transition-all border border-zinc-950 cursor-pointer flex items-center justify-center shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
              <div className="text-[9.5px]/none text-center text-zinc-400 font-mono tracking-widest mt-3 uppercase">
                Gfilled Group
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
