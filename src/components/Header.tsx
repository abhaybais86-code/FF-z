import React from 'react';
import { Menu, Download } from 'lucide-react';
import { UserProfile } from '../types';

interface HeaderProps {
  user: UserProfile;
  onOpenDrawer: () => void;
  onOpenAuth: (mode: 'login' | 'signup') => void;
  onOpenWallet: () => void;
  onOpenDownload: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  onOpenDrawer,
  onOpenAuth,
  onOpenWallet,
  onOpenDownload
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo - FF Arena ESPORTS */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center space-x-2.5 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform border border-slate-800 overflow-hidden">
            <img src="/1000005890.png" alt="Logo" className="object-contain h-8 w-auto" />
          </div>
          <div>
            <div className="flex items-center space-x-1">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 font-sans">FF</span>
              <span className="font-extrabold text-xl tracking-tight text-purple-600 font-sans">Arena</span>
            </div>
            <span className="block text-[10px] uppercase font-extrabold tracking-wider text-purple-600 -mt-1">
              ESPORTS
            </span>
          </div>
        </div>

        {/* Right Actions - No Wallet, Prominent App Download CTA & Hamburger Menu */}
        <div className="flex items-center space-x-2.5 sm:space-x-3">
          {/* Main CTA Button: Install App to Play */}
          <button
            onClick={onOpenDownload}
            className="px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold bg-slate-950 text-white hover:bg-slate-800 border border-slate-800 shadow-md transition-all flex items-center space-x-1.5 group"
          >
            <Download className="w-4 h-4 text-purple-400 group-hover:animate-bounce" />
            <span>GET APP NOW ⚡</span>
          </button>

          {/* Hamburger Menu Trigger */}
          <button
            onClick={onOpenDrawer}
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 text-slate-700 transition-colors"
            aria-label="Open Navigation Drawer"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

