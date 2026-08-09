import React from 'react';
import { X, Globe, User, LogOut, Wallet, ShieldCheck, Download, ChevronRight } from 'lucide-react';
import { UserProfile } from '../types';

interface NavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserProfile;
  onOpenAuth: (mode: 'login' | 'signup') => void;
  onOpenInfoModal: (tab: 'about' | 'privacy' | 'terms' | 'contact') => void;
  onOpenWallet: () => void;
  onOpenDownload: () => void;
  onLogout: () => void;
}

export const NavDrawer: React.FC<NavDrawerProps> = ({
  isOpen,
  onClose,
  user,
  onOpenAuth,
  onOpenInfoModal,
  onOpenWallet,
  onOpenDownload,
  onLogout
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Slide-over Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between overflow-y-auto transform transition-transform duration-300">
          
          {/* Header */}
          <div>
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-purple-400 font-extrabold text-sm overflow-hidden">
                  <img src="/1000005890.png" alt="Logo" className="object-contain h-6 w-auto" />
                </div>
                <span className="font-extrabold text-lg text-slate-900">FF Arena</span>
              </div>
              <button 
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="p-6 space-y-6">
              
              {/* Home Link */}
              <div>
                <button
                  onClick={onClose}
                  className="w-full text-left font-bold text-slate-800 hover:text-purple-600 py-1 text-base transition-colors flex items-center justify-between"
                >
                  <span>Home</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>

              {/* ABOUT US Section */}
              <div className="space-y-2">
                <div className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                  ABOUT US
                </div>
                <ul className="space-y-2 text-sm font-medium text-slate-700 pl-2">
                  <li>
                    <button
                      onClick={() => { onClose(); onOpenInfoModal('about'); }}
                      className="hover:text-purple-600 py-1 text-left w-full transition-colors flex items-center justify-between"
                    >
                      <span>About Us (Main)</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => { onClose(); onOpenInfoModal('privacy'); }}
                      className="hover:text-purple-600 py-1 text-left w-full transition-colors flex items-center justify-between"
                    >
                      <span>Privacy Policy</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => { onClose(); onOpenInfoModal('terms'); }}
                      className="hover:text-purple-600 py-1 text-left w-full transition-colors flex items-center justify-between"
                    >
                      <span>Terms & Conditions</span>
                    </button>
                  </li>
                </ul>
              </div>

              {/* Contact Link */}
              <div>
                <button
                  onClick={() => { onClose(); onOpenInfoModal('contact'); }}
                  className="w-full text-left font-bold text-slate-800 hover:text-purple-600 py-1 text-base transition-colors flex items-center justify-between"
                >
                  <span>Contact</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>

              {/* LANGUAGES Section */}
              <div className="space-y-2.5">
                <div className="text-[11px] font-bold tracking-wider text-slate-400 uppercase flex items-center space-x-1">
                  <Globe className="w-3.5 h-3.5" />
                  <span>LANGUAGES</span>
                </div>
                <div>
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-purple-600 text-white shadow-xs">
                    English
                  </span>
                </div>
              </div>

              {/* Download APK Quick Link */}
              <div className="pt-2">
                <button
                  onClick={() => { onClose(); onOpenDownload(); }}
                  className="w-full py-3 px-4 rounded-xl bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-700 font-bold text-sm flex items-center justify-between transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <Download className="w-4 h-4 text-purple-600" />
                    <span>Download App APK ⚡</span>
                  </div>
                  <span className="text-xs font-semibold bg-purple-200/80 px-2 py-0.5 rounded text-purple-800">
                    Android
                  </span>
                </button>
              </div>

            </div>
          </div>

          {/* Footer Auth Buttons */}
          <div className="p-6 border-t border-slate-100 space-y-3 bg-slate-50/50">
            {!user.isLoggedIn ? (
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => { onClose(); onOpenAuth('login'); }}
                  className="w-full py-3 px-4 rounded-full border border-slate-300 font-bold text-sm text-slate-800 hover:bg-white transition-colors"
                >
                  Login
                </button>
                <button
                  onClick={() => { onClose(); onOpenAuth('signup'); }}
                  className="w-full py-3 px-4 rounded-full bg-slate-900 font-bold text-sm text-white hover:bg-slate-800 shadow-md transition-colors"
                >
                  Sign Up
                </button>
              </div>
            ) : (
              <button
                onClick={() => { onClose(); onLogout(); }}
                className="w-full py-3 px-4 rounded-full bg-rose-50 border border-rose-200 text-rose-700 font-bold text-sm flex items-center justify-center space-x-2 hover:bg-rose-100 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Log Out</span>
              </button>
            )}

            <div className="text-center text-[11px] text-slate-400 font-medium pt-2">
              🟢 FairPlay Certified • 18+ Only
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
