import React from 'react';
import { Download, Apple, Shield, Trophy } from 'lucide-react';

interface DownloadBannerProps {
  onDownloadAndroid: () => void;
}

export const DownloadBanner: React.FC<DownloadBannerProps> = ({
  onDownloadAndroid
}) => {
  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-slate-800 shadow-2xl text-center flex flex-col items-center">
          
          {/* Top Badge */}
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black tracking-wide mb-6">
            <Trophy className="w-3.5 h-3.5 fill-amber-400" />
            <span>Your next win is one match away</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 leading-tight max-w-2xl">
            Download FF Arena.{' '}
            <span className="text-amber-400">Play.</span>{' '}
            <span className="text-purple-400">Win.</span>{' '}
            <span className="text-emerald-400">Withdraw.</span>
          </h2>

          {/* Subtitle */}
          <p className="max-w-xl text-slate-400 text-sm sm:text-base font-medium leading-relaxed mb-8">
            Join 50,000+ Indian gamers competing in skill-based mobile gaming tournaments — every hour, every day.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-8">
            <button
              onClick={onDownloadAndroid}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-purple-600/30 active:scale-[0.98] transition-all flex items-center justify-center space-x-2.5 border border-purple-400/30"
            >
              <Download className="w-5 h-5" />
              <span>Download for Android</span>
            </button>

            <button
              disabled
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 font-bold text-sm sm:text-base cursor-not-allowed flex items-center justify-center space-x-2"
            >
              <Apple className="w-5 h-5 text-slate-500" />
              <span>Soon For iOS</span>
            </button>
          </div>

          {/* Emblem Graphic */}
          <div className="w-24 h-24 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-inner relative overflow-hidden">
            <img src="/1000005890.png" alt="Logo" className="object-contain w-16 h-16 relative z-10" />
          </div>

        </div>

      </div>
    </section>
  );
};
