"use client";

import { useEffect, useRef, useState, createContext, useContext } from "react";
import Lenis from "lenis";

interface ScrollContextValue {
  scrollTo: (target: string | HTMLElement) => void;
}

const ScrollContext = createContext<ScrollContextValue | null>(null);

export function useLenisScroll() {
  const ctx = useContext(ScrollContext);
  if (!ctx) throw new Error("useLenisScroll must be used within ScrollManager");
  return ctx;
}

export default function ScrollManager({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(0);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.2,
    });

    lenisRef.current = lenis;

    lenis.on("scroll", (e: { progress: number }) => {
      setProgress(Math.min(1, Math.max(0, e.progress)));
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const scrollTo = (target: string | HTMLElement) => {
    const el = typeof target === "string" ? document.getElementById(target) : target;
    if (el && lenisRef.current) {
      lenisRef.current.scrollTo(el, {
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  return (
    <ScrollContext.Provider value={{ scrollTo }}>
      <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-zinc-200/30 pointer-events-none">
        <div
          className="h-full bg-[#C5A059] transition-all duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
      {children}
    </ScrollContext.Provider>
  );
}
