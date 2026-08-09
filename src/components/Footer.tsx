import React from 'react';
import { Shield, Flame } from 'lucide-react';

interface FooterProps {
  onOpenInfoModal: (tab: 'about' | 'privacy' | 'terms' | 'contact') => void;
  onOpenDownload: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenInfoModal,
  onOpenDownload
}) => {
  return (
    <footer className="bg-white border-t border-slate-200/80 pt-12 pb-8 text-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-200/80">
          
          {/* Logo & Bio Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center text-purple-400 font-extrabold text-sm shadow-xs overflow-hidden">
                <img src="/1000005890.png" alt="Logo" className="object-contain h-7 w-auto" />
              </div>
              <span className="font-black text-xl text-slate-900 tracking-tight">FF Arena</span>
            </div>

            <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed max-w-xl">
              <strong>FF ARENA</strong> is a skill-based esports tournament platform created especially for mobile gaming & survival battle players. Compete in exciting modes like Survival Battle Royale, 4v4 Squad Match, 1v1 Duel Match, and many more coming soon.
            </p>

            <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed max-w-xl">
              Players can join free and paid tournaments, win coins, climb the leaderboards, and redeem their winnings as UPI cash or Google Play gift cards.
            </p>

            <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed max-w-xl">
              Our simple, user-friendly interface, fair-play systems, and Automatic Host Activity Detection work together to deliver a smooth, transparent, and secure tournament experience for every player.
            </p>
          </div>

          {/* Links Column 1: PLATFORM */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
              PLATFORM
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold text-slate-600">
              <li>
                <a href="#tournaments-section" className="hover:text-purple-600 transition-colors">Games</a>
              </li>
              <li>
                <a href="#tournaments-section" className="hover:text-purple-600 transition-colors">Tournaments</a>
              </li>
              <li>
                <button onClick={() => onOpenInfoModal('about')} className="hover:text-purple-600 transition-colors">Rewards</button>
              </li>
              <li>
                <a href="#tournaments-section" className="hover:text-purple-600 transition-colors">Stats</a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: SUPPORT / QUICK LINKS */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
              QUICK LINKS & SUPPORT
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold text-slate-600">
              <li>
                <button onClick={() => onOpenInfoModal('contact')} className="hover:text-purple-600 transition-colors">Help Center</button>
              </li>
              <li>
                <button onClick={() => onOpenInfoModal('contact')} className="hover:text-purple-600 transition-colors">Contact Us</button>
              </li>
              <li>
                <button onClick={() => onOpenInfoModal('privacy')} className="hover:text-purple-600 transition-colors">Privacy Policy</button>
              </li>
              <li>
                <button onClick={() => onOpenInfoModal('terms')} className="hover:text-purple-600 transition-colors">Terms & Conditions</button>
              </li>
              <li>
                <button onClick={onOpenDownload} className="hover:text-purple-600 transition-colors">Get App (APK)</button>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="my-8 p-4 rounded-2xl bg-slate-50 border border-slate-200/90 text-xs text-slate-500 leading-relaxed font-medium">
          <p>
            <strong className="text-slate-800 font-bold">Disclaimer:</strong> FF Arena is an independent gaming tournament platform. It is not affiliated with, endorsed by, authorized, or sponsored by Garena, Free Fire, or any of their parent or subsidiary companies. All product names, logos, and brands belong to their respective owners.
          </p>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs font-medium text-slate-500">
          <div>
            Copyright © 2026 All right Reserved. <br className="sm:hidden" />
            <span className="font-bold text-slate-700">Do Work Fairly Because One Mistake = Big Regret ™</span>
          </div>

          <div className="inline-flex items-center space-x-2 bg-slate-100 px-3.5 py-1.5 rounded-full text-[11px] font-bold text-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>FairPlay Certified • 18+ • Play Responsibly</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
