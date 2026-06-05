"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ShieldCheck, ArrowRight, ArrowUpRight, Scale, AlertTriangle, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onVerifyClick: () => void;
  onConsultClick: () => void;
}

export default function Hero({ onVerifyClick, onConsultClick }: HeroProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedRegistry, setSelectedRegistry] = useState<"abuja" | "lagos">("abuja");
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, [isPlayingVideo]);

  const togglePlay = () => {
    if (!isPlayingVideo) {
      setIsPlayingVideo(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().catch((err) => console.log("Video play failed:", err));
          setIsPlaying(true);
        }
      }, 50);
    } else {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play().catch((err) => console.log("Video play failed:", err));
        }
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    if (videoRef.current && videoRef.current.duration) {
      const newTime = (clickX / width) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
    }
  };

  const registryInfo = {
    abuja: {
      title: "AGIS Abuja Registry",
      status: "Direct Cadastral Search Active",
      stat: "400+ Plots Audited",
    },
    lagos: {
      title: "Lagos Lands Bureau",
      status: "C of O Verification Active",
      stat: "230+ Surveys Perfected",
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] xl:min-h-[100vh] pt-24 sm:pt-32 pb-12 sm:pb-16 flex flex-col justify-between overflow-hidden text-white"
    >
      {/* Premium Framer Image Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://pub-c0e4eba1bc8e4753be4abcf9f2033e98.r2.dev/herobg.avif"
          alt="Premium Luxury Real Estate Background"
          fill
          priority
          className="object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Just one flat overlay with zero gradient complexity */}
        <div className="absolute inset-0 bg-black/20 z-10" />
      </div>

      {/* Main Inner Hero Grid - Elevated and High Contrast */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-20 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Area: Display Slogan, Actions, Metrics */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Minimal Gold Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-black/60 backdrop-blur-sm rounded-sm border border-white/20 shadow-sm"
            >
              <span className="w-2 h-2 bg-[#C5A059] rounded-sm animate-pulse"></span>
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white font-sans">
                Your Trusted Property Protection Team
              </span>
            </motion.div>

            {/* Heavy Elegant Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="font-sans font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] sm:leading-[1.08] uppercase text-white">
                Buy Property in <br className="hidden sm:inline" />
                <span className="text-white">
                  Nigeria With Confidence
                </span>
              </h1>
              <p className="text-zinc-100 text-sm sm:text-base leading-relaxed max-w-xl font-medium drop-shadow-md">
                Do not lose your savings to a property scam. We check government land records, visit the property to measure the boundaries, and protect your payments every step of the way across Nigeria.
              </p>
            </motion.div>

            {/* Inline Action Button matching Screenshot Structure */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="flex items-center gap-3 inline-flex"
            >
              <button
                onClick={onVerifyClick}
                className={`flex items-center gap-2 px-6 py-3.5 transition-all duration-300 rounded-sm text-xs font-bold uppercase tracking-widest shadow-lg cursor-pointer ${
                  isHovered ? "bg-[#C5A059] text-brand-dark animate-pulse" : "bg-white text-brand-dark"
                }`}
              >
                Start Verification
              </button>
              
              {/* Gold Circular Badge next to button */}
              <button
                onClick={onVerifyClick}
                className={`w-11 h-11 rounded-sm flex items-center justify-center transition-all duration-300 transform cursor-pointer shadow-md ${
                  isHovered ? "bg-[#C5A059] text-brand-dark scale-105" : "bg-white text-brand-dark"
                }`}
                aria-label="Diagnose transaction status"
              >
                <ArrowUpRight className="w-5 h-5 text-brand-dark font-black" />
              </button>
            </motion.div>
          </div>

          {/* Right Area: Large Sharp Floating Portrait Video Debrief Card */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 30, rotate: 1 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:max-w-[340px] bg-brand-dark rounded-sm p-4 shadow-2xl relative overflow-hidden text-brand-dark border border-zinc-800"
            >
              {/* Header inside validation mockup */}
              <div className="flex justify-between items-center mb-3 text-left">
                <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-400 font-mono">
                  QUICK INTRO
                </span>
                <span className="px-2.5 py-1 rounded-sm bg-[#C5A059] text-brand-dark text-[9px] font-black tracking-wider uppercase">
                  WATCH VIDEO
                </span>
              </div>

              {/* Portrait Video Thumbnail / Custom Player Frame */}
              <div 
                className="relative h-[400px] sm:h-[480px] w-full rounded-sm overflow-hidden shadow-sm bg-brand-dark group cursor-pointer border border-zinc-850"
              >
                {isPlayingVideo ? (
                  <div 
                    className="relative w-full h-full bg-black flex items-center justify-center group/player"
                    onMouseEnter={() => setShowControls(true)}
                    onMouseLeave={() => setShowControls(false)}
                  >
                    <video
                      ref={videoRef}
                      src="https://pub-c0e4eba1bc8e4753be4abcf9f2033e98.r2.dev/herovideo.mp4"
                      playsInline
                      autoPlay
                      onClick={togglePlay}
                      className="w-full h-full object-contain cursor-pointer"
                    />

                    {/* Custom Premium Controls Overlay */}
                    <div className={`absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col gap-2 transition-opacity duration-300 z-30 ${showControls ? "opacity-100" : "opacity-0"}`}>
                      {/* Timeline Bar */}
                      <div 
                        className="h-1 w-full bg-white/20 rounded-full overflow-hidden cursor-pointer relative"
                        onClick={handleTimelineClick}
                      >
                        <div 
                          className="h-full bg-[#C5A059] transition-all duration-100" 
                          style={{ width: `${progress}%` }} 
                        />
                      </div>

                      {/* Controls Row */}
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              togglePlay();
                            }}
                            className="hover:text-[#C5A059] transition-colors"
                            title={isPlaying ? "Pause" : "Play"}
                          >
                            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                          </button>
                          <button 
                            onClick={toggleMute}
                            className="hover:text-[#C5A059] transition-colors"
                            title={isMuted ? "Unmute" : "Mute"}
                          >
                            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                        
                        <div className="text-[8px] uppercase tracking-wider text-zinc-400 font-mono">
                          {isPlaying ? "PLAYING INTRODUCTION" : "PAUSED"}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full relative" onClick={togglePlay}>
                    <Image
                      src="https://pub-c0e4eba1bc8e4753be4abcf9f2033e98.r2.dev/team.jpeg"
                      alt="Gfilled Team Video Explainer Thumbnail"
                      fill
                      className="object-cover duration-500 group-hover:scale-105 opacity-80"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Floating active overlay */}
                    <div className="absolute top-3 left-3 bg-brand-dark/90 py-1.5 px-3 rounded-sm text-white flex items-center gap-2 z-20">
                      <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-sm animate-pulse"></span>
                      <span className="text-[9px] font-mono font-bold tracking-wider uppercase text-zinc-100">
                        EXPLAINER PLAYBACK READY
                      </span>
                    </div>

                    {/* Central Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center z-13">
                      <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:bg-[#C5A059] transition-all duration-300 shadow-xl scale-95 group-hover:scale-105">
                        <Play className="w-6 h-6 text-white group-hover:text-brand-dark fill-current translate-x-0.5" />
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-zinc-950/25 to-transparent z-10" />

                    {/* Informative Video Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-left z-20 bg-black/50 backdrop-blur-md p-3.5 rounded-sm border border-white/10">
                      <p className="text-[10px] uppercase font-mono font-black text-[#C5A059] tracking-widest mb-1 animate-pulse">
                        WATCH THIS FIRST
                      </p>
                      <p className="text-xs text-zinc-100 font-sans font-bold leading-normal">
                        See how Gfilled Group helps you buy property safely in Nigeria without getting scammed.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Simplified Action under the expanded video area */}
              <div className="mt-4 px-1">
                <button
                  onClick={togglePlay}
                  className="w-full py-3.5 rounded-sm bg-white hover:bg-[#C5A059] text-brand-dark text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer"
                >
                  {isPlaying ? "Pause Explainer Video" : "Play Explainer Video"}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Glassmorphic Banner matching screenshot logobar */}
      <div className="w-full relative z-20 pt-10 pb-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="rounded-sm bg-black/60 backdrop-blur-md border border-white/10 p-5 md:py-6 md:px-8 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4 md:gap-6">
            <span className="text-[10px] text-[#C5A059] font-mono font-black tracking-widest uppercase">
              Government Registries We Check:
            </span>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-10 text-xs text-zinc-100 font-mono">
              <span className="flex items-center gap-1 font-semibold">
                <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-sm"></span>
                AGIS (ABUJA)
              </span>
              <span className="flex items-center gap-1 font-semibold">
                <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-sm"></span>
                LANDS BUREAU (LAGOS)
              </span>
              <span className="flex items-center gap-1 font-semibold">
                <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-sm"></span>
                FEDERAL LAND CAUTION LIST
              </span>
              <span className="flex items-center gap-1 font-semibold">
                <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-sm"></span>
                GFILLED GROUP
              </span>
            </div>
            <div className="text-[9px] text-[#C5A059] font-sans uppercase font-bold tracking-widest hidden md:block">
              100% Neutral
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
