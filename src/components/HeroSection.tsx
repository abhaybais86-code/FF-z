import React from 'react';
import { Download, Play, Star, Shield, Trophy, Zap, Banknote, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onDownloadApp: () => void;
  onStartPlaying: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onDownloadApp,
  onStartPlaying
}) => {
  return (
    <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 bg-grid-pattern overflow-hidden">
      
      {/* Radial soft background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* 1. Live Indicator Pill */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#181A20] border border-[#262A36] shadow-xs mb-6 transition-all hover:border-purple-500/50">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold text-gray-200 tracking-tight">
              Live • India's Premier Mobile Gaming Battle Hub
            </span>
          </div>

          {/* 2. Main Title */}
          <h1 className="max-w-4xl text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15] mb-5">
            Unleash Your Skills. Claim Victory in{' '}
            <span className="text-purple-gradient">
              Survival Battles 🎮
            </span>
          </h1>

          {/* 3. Subtitle */}
          <p className="max-w-2xl text-gray-300 text-sm sm:text-base md:text-lg font-medium leading-relaxed mb-8">
            Step into the ultimate competitive stage. Test your tactics against verified players, track live match stats, and enjoy fast, secure rewards payout.
          </p>

          {/* 4. CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md mb-8">
            <button
              onClick={onDownloadApp}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#6339E0] text-white font-extrabold text-sm sm:text-base tracking-wide shadow-lg shadow-purple-900/30 hover:bg-[#522BC4] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2.5 border border-purple-500/30"
            >
              <Download className="w-5 h-5 text-white" />
              <span>GET APP NOW ⚡</span>
            </button>

            <button
              onClick={onStartPlaying}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#181A20] border border-[#262A36] text-gray-200 font-bold text-sm sm:text-base shadow-xs hover:bg-[#1F222A] hover:border-purple-500/40 active:scale-[0.98] transition-all flex items-center justify-center space-x-2"
            >
              <div className="w-6 h-6 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-400">
                <Play className="w-3.5 h-3.5 fill-purple-400 translate-x-0.5" />
              </div>
              <span>Explore Matches</span>
            </button>
          </div>

          {/* 5. Social Proof Badge */}
          <div className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-gray-300 mb-12 bg-[#181A20]/80 px-4 py-2 rounded-full border border-[#262A36] shadow-xs">
            <div className="flex items-center text-amber-400 space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span>Rated <strong className="text-white font-bold">4.8/5</strong> by <strong className="text-white font-bold">50,000+ Active Gamers</strong></span>
          </div>

          {/* 6. Hero Floating Badges / Graphic Cards */}
          <div className="relative w-full max-w-xl mx-auto mt-2">
            
            {/* Outer concentric grid rings */}
            <div className="relative w-72 sm:w-80 h-72 sm:h-80 mx-auto rounded-full border border-[#262A36] flex items-center justify-center bg-gradient-to-b from-[#181A20] to-purple-950/30 shadow-inner">
              <div className="w-56 sm:w-60 h-56 sm:h-60 rounded-full border border-purple-500/20 flex items-center justify-center bg-[#181A20]/90 shadow-xs">
                
                {/* Central Mascot Emblem */}
                <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-3xl bg-slate-950 flex flex-col items-center justify-center shadow-2xl border border-purple-500/30 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/50 via-transparent to-indigo-900/50" />
                  <img src="/1000005890.png" alt="Logo" className="object-contain w-24 h-24 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                  <Sparkles className="w-6 h-6 text-amber-400 absolute top-3 right-3 z-10" />
                  <span className="text-[11px] font-black tracking-widest text-white uppercase relative z-10 mt-1">
                    FF ARENA
                  </span>
                </div>

              </div>
            </div>

            {/* FLOATING BADGES */}

            {/* Badge 1: Top Left - Prize Pool */}
            <div className="absolute top-2 left-2 sm:left-4 bg-[#181A20]/95 backdrop-blur-md border border-[#262A36] rounded-2xl p-2.5 sm:p-3 shadow-xl flex items-center space-x-2.5 animate-bounce-slow">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
                <Trophy className="w-5 h-5 fill-amber-400/20" />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase font-extrabold tracking-wider text-gray-400">
                  PRIZE POOL
                </div>
                <div className="text-xs sm:text-sm font-black text-white">
                  ₹5,00,000
                </div>
              </div>
            </div>

            {/* Badge 2: Top Right - Withdrawal */}
            <div className="absolute top-8 right-2 sm:right-4 bg-[#181A20]/95 backdrop-blur-md border border-[#262A36] rounded-2xl p-2.5 sm:p-3 shadow-xl flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                <Banknote className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase font-extrabold tracking-wider text-gray-400">
                  WITHDRAWAL
                </div>
                <div className="text-xs sm:text-sm font-black text-white flex items-center space-x-1">
                  <span>₹250</span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/20 px-1 rounded">2s ago</span>
                </div>
              </div>
            </div>

            {/* Badge 3: Bottom Left - FairPlay */}
            <div className="absolute bottom-4 left-2 sm:left-8 bg-[#181A20]/95 backdrop-blur-md border border-[#262A36] rounded-2xl p-2.5 sm:p-3 shadow-xl flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
                <Shield className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase font-extrabold tracking-wider text-gray-400">
                  FAIRPLAY
                </div>
                <div className="text-xs sm:text-sm font-black text-white">
                  Enabled
                </div>
              </div>
            </div>

            {/* Badge 4: Bottom Right - Matches Played */}
            <div className="absolute bottom-0 right-2 sm:right-6 bg-[#181A20]/95 backdrop-blur-md border border-[#262A36] rounded-2xl p-2.5 sm:p-3 shadow-xl flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20">
                <Zap className="w-5 h-5 fill-purple-400/20" />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase font-extrabold tracking-wider text-gray-400">
                  MATCHES
                </div>
                <div className="text-xs sm:text-sm font-black text-white">
                  120,000+ Played
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
