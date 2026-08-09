import React from 'react';
import { Shield, Wallet, Zap, ShieldAlert, Headphones, Users } from 'lucide-react';

export const StatsGrid: React.FC = () => {
  return (
    <section className="py-8 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* 1. 4-Box Performance Metric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          
          <div className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 text-center shadow-2xs hover:border-purple-200 transition-all">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              50K+
            </div>
            <div className="text-xs font-bold text-slate-600 mt-1">
              Active Competitors
            </div>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 text-center shadow-2xs hover:border-purple-200 transition-all">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              120K+
            </div>
            <div className="text-xs font-bold text-slate-600 mt-1">
              Matches Organized
            </div>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 text-center shadow-2xs hover:border-purple-200 transition-all">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Instant
            </div>
            <div className="text-xs font-bold text-slate-600 mt-1">
              Balance Transfers
            </div>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 text-center shadow-2xs hover:border-purple-200 transition-all">
            <div className="text-2xl sm:text-3xl font-black text-purple-600 tracking-tight">
              100%
            </div>
            <div className="text-xs font-bold text-slate-600 mt-1">
              FairPlay Certified Engine
            </div>
          </div>

        </div>

        {/* 2. Trust Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 sm:gap-3">
          
          <div className="bg-white border border-slate-200/80 rounded-xl p-3 flex items-center space-x-2.5 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-800 leading-tight">
              Anti-Cheat Active
            </span>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-xl p-3 flex items-center space-x-2.5 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <Wallet className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-800 leading-tight">
              Encrypted Wallet
            </span>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-xl p-3 flex items-center space-x-2.5 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-800 leading-tight">
              Quick Settlements
            </span>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-xl p-3 flex items-center space-x-2.5 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Shield className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-800 leading-tight">
              Verified Rooms
            </span>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-xl p-3 flex items-center space-x-2.5 sm:col-span-1 col-span-2 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Headphones className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-800 leading-tight">
              Round-the-Clock Support
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
