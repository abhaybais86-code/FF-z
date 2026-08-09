import React from 'react';

export const ScoreboardSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-950 text-white relative overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Pill Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300 mb-4">
          The scoreboard, live
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-12">
          A platform players <span className="text-amber-400">win</span>
        </h2>

        {/* 4 Large Dark Glow Stat Boxes */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 text-center shadow-2xl hover:border-amber-500/50 transition-all group">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-400 tracking-tight group-hover:scale-105 transition-transform">
              ₹2,15,00,000+
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-400 mt-2 uppercase tracking-wider">
              Total Rewards Distributed
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 text-center shadow-2xl hover:border-purple-500/50 transition-all group">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-purple-400 tracking-tight group-hover:scale-105 transition-transform">
              50,000+
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-400 mt-2 uppercase tracking-wider">
              Total Players
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 text-center shadow-2xl hover:border-indigo-500/50 transition-all group">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-indigo-400 tracking-tight group-hover:scale-105 transition-transform">
              120,000+
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-400 mt-2 uppercase tracking-wider">
              Matches Played
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 text-center shadow-2xl hover:border-emerald-500/50 transition-all group">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-400 tracking-tight group-hover:scale-105 transition-transform">
              10,800+
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-400 mt-2 uppercase tracking-wider">
              Daily Winners
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
