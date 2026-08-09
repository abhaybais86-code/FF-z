import React from 'react';
import { Tournament } from '../types';
import { Shield, Sparkles, Trophy, Users, Zap, Search } from 'lucide-react';

interface LiveTournamentsSectionProps {
  tournaments: Tournament[];
  onJoinTournament: (tournament: Tournament) => void;
  selectedCategory: string;
}

export const LiveTournamentsSection: React.FC<LiveTournamentsSectionProps> = ({
  tournaments,
  onJoinTournament,
  selectedCategory
}) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredTournaments = tournaments.filter(t => {
    const matchesCategory = selectedCategory === 'all' || t.category === selectedCategory;
    const matchesSearch = t.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          t.mode.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="tournaments-section" className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Live now</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
          Jump into a live <span className="text-purple-gradient">tournament</span>
        </h2>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-slate-600 text-sm sm:text-base font-medium mb-8">
          Real players. Real prize pools. Real-time payouts on match completion.
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto relative mb-10">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search tournament name or mode..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 bg-slate-50/80 text-xs sm:text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
          />
        </div>

        {/* Tournament Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredTournaments.map((t) => {
            const fillPercentage = Math.round((t.joinedPlayers / t.maxPlayers) * 100);
            const remaining = t.maxPlayers - t.joinedPlayers;

            return (
              <div
                key={t.id}
                className="bg-slate-950 text-white rounded-3xl overflow-hidden border border-slate-800 shadow-xl flex flex-col justify-between hover:border-purple-500/60 transition-all duration-300 group"
              >
                {/* Dark Banner Header */}
                <div className="p-5 sm:p-6 bg-gradient-to-b from-purple-950/60 to-slate-950 border-b border-slate-800/80">
                  
                  {/* Top Badges */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-extrabold tracking-wide">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>LIVE</span>
                    </span>

                    <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[11px] font-extrabold">
                      <Shield className="w-3 h-3 text-purple-400" />
                      <span>FairPlay</span>
                    </span>
                  </div>

                  {/* Mode */}
                  <div className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-1">
                    {t.mode}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center space-x-2">
                    <span>{t.title}</span>
                  </h3>

                  {/* Map / Time */}
                  <div className="mt-2 text-[11px] text-purple-300 font-semibold flex items-center space-x-2">
                    <span className="bg-purple-900/60 px-2 py-0.5 rounded border border-purple-700/50">
                      {t.map || 'Bermuda'}
                    </span>
                    <span>• {t.startTime}</span>
                  </div>
                </div>

                {/* Card Body - Details Grid */}
                <div className="p-5 sm:p-6 space-y-5 bg-slate-950">
                  
                  <div className="grid grid-cols-3 gap-2 text-center py-2 px-3 bg-slate-900/90 rounded-2xl border border-slate-800">
                    <div>
                      <div className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                        ENTRY FEE
                      </div>
                      <div className="text-base sm:text-lg font-black text-white mt-0.5">
                        ₹{t.entryFee}
                      </div>
                    </div>

                    <div className="border-x border-slate-800">
                      <div className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                        PRIZE POOL
                      </div>
                      <div className="text-base sm:text-lg font-black text-amber-400 mt-0.5 flex items-center justify-center space-x-0.5">
                        <span>₹{t.prizePool.toLocaleString('en-IN')}</span>
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                        REMAINING
                      </div>
                      <div className="text-base sm:text-lg font-black text-purple-400 mt-0.5">
                        {remaining} left
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-1.5">
                      <span>{t.joinedPlayers} players joined</span>
                      <span className="text-purple-400 font-black">{fillPercentage}%</span>
                    </div>

                    <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden p-0.5">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full transition-all duration-500"
                        style={{ width: `${fillPercentage}%` }}
                      />
                    </div>
                  </div>

                  {/* Join CTA Button */}
                  <button
                    onClick={() => onJoinTournament(t)}
                    className="w-full py-3.5 px-4 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-sm sm:text-base tracking-wide shadow-lg shadow-purple-600/30 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 border border-purple-400/30"
                  >
                    <Trophy className="w-4 h-4 fill-white/20" />
                    <span>Join Tournament</span>
                  </button>

                </div>

              </div>
            );
          })}
        </div>

        {filteredTournaments.length === 0 && (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center max-w-md mx-auto">
            <p className="text-slate-600 font-bold text-sm">No tournaments matching your filter.</p>
            <button
              onClick={() => { setSearchTerm(''); }}
              className="mt-3 px-4 py-2 bg-purple-600 text-white font-bold text-xs rounded-full"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
