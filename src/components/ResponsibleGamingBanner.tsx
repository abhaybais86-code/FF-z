import React from 'react';
import { AlertTriangle, ShieldAlert, Ban, Info, Scale } from 'lucide-react';

interface ResponsibleGamingBannerProps {
  onOpenTerms?: () => void;
}

export const ResponsibleGamingBanner: React.FC<ResponsibleGamingBannerProps> = ({ onOpenTerms }) => {
  return (
    <section className="py-10 bg-slate-950 text-white relative overflow-hidden border-t border-b border-slate-800">
      {/* Background glow effects */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
          
          {/* Top Badge & Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-red-400 text-xs font-black uppercase tracking-wider mb-1">
                  <span>🔞 18+ Only | Play Responsibly</span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                  Responsible Gaming & State Legal Compliance Notice
                </h3>
              </div>
            </div>

            {onOpenTerms && (
              <button
                onClick={onOpenTerms}
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white font-bold text-xs border border-slate-700/80 transition-all shrink-0"
              >
                <Scale className="w-3.5 h-3.5 text-amber-400" />
                <span>Read Full Terms</span>
              </button>
            )}
          </div>

          {/* 3 Point Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-6">
            
            {/* Point 1: Age Restriction */}
            <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-slate-700/80 transition-all">
              <div className="flex items-center space-x-2.5 mb-3">
                <div className="w-8 h-8 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <h4 className="font-extrabold text-sm text-slate-100">
                  Age Restriction (18+)
                </h4>
              </div>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                Must be 18 years of age or older to register and participate in any cash matches on this platform.
              </p>
            </div>

            {/* Point 2: Financial Risk */}
            <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-slate-700/80 transition-all">
              <div className="flex items-center space-x-2.5 mb-3">
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <h4 className="font-extrabold text-sm text-slate-100">
                  Financial Risk Warning
                </h4>
              </div>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                This platform involves financial risk and may be addictive. Please play responsibly and at your own risk.
              </p>
            </div>

            {/* Point 3: State Restrictions */}
            <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-slate-700/80 transition-all">
              <div className="flex items-center space-x-2.5 mb-3">
                <div className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center shrink-0">
                  <Ban className="w-4 h-4 text-rose-400" />
                </div>
                <h4 className="font-extrabold text-sm text-slate-100">
                  Restricted States Policy
                </h4>
              </div>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                Services are not available for residents of states where real-money skill gaming is legally restricted (e.g., Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, Sikkim).
              </p>
            </div>

          </div>

          {/* Bottom Disclaimer Footer Bar */}
          <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 font-medium flex-wrap gap-2">
            <div className="flex items-center space-x-2">
              <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Contests are games of skill under Indian gaming laws. Users must self-declare age and location prior to participation.</span>
            </div>
            <div className="text-slate-500 font-mono text-[10px]">
              CERTIFIED SAFE & SKILL-BASED
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
