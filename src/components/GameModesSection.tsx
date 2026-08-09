import React from 'react';
import { GAME_MODES } from '../data/mockData';
import { 
  Gamepad2, Target, Flame, Crosshair, User, Users, Users2, 
  DoorOpen, ShieldAlert, Banknote, Trophy, CheckCircle2 
} from 'lucide-react';

interface GameModesSectionProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Gamepad2,
  Target,
  Flame,
  Crosshair,
  User,
  Users,
  Users2,
  DoorOpen,
  ShieldAlert,
  Banknote,
  Trophy
};

export const GameModesSection: React.FC<GameModesSectionProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  return (
    <section className="py-16 md:py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Pill Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs mb-4">
          Skill-Based Mobile Esports
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
          Arena Match Categories • <span className="text-purple-gradient">Choose Your Battlefield</span>
        </h2>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-slate-600 text-sm sm:text-base font-medium mb-10">
          From 4v4 Squad Matches to Survival Battle Royale — join the mode you love and compete for real cash rewards, every day.
        </p>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {[
            { id: 'all', label: 'All Modes' },
            { id: 'cs', label: '4v4 Squad Match' },
            { id: 'lonewolf', label: '1v1 Duel Match' },
            { id: 'br', label: 'Survival Battle Royale' },
            { id: 'survival', label: 'Solo Survival' },
            { id: 'squad', label: 'Squad & Guild' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20 scale-105'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Game Mode Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-left">
          {GAME_MODES.filter(m => selectedCategory === 'all' || m.category === selectedCategory).map((mode) => {
            const Icon = ICON_MAP[mode.iconName] || Gamepad2;
            return (
              <div
                key={mode.id}
                onClick={() => onSelectCategory(mode.category)}
                className="bg-white border border-slate-200/90 rounded-2xl p-5 hover:border-purple-300 hover:shadow-md transition-all duration-200 cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-colors">
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug">
                      {mode.name}
                    </h4>
                    <span className="text-xs text-slate-500 font-medium">
                      {mode.subText}
                    </span>
                  </div>
                </div>

                <div className="text-right flex flex-col items-end space-y-1">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                    {mode.tag}
                  </span>
                  {mode.fairPlay && (
                    <span className="inline-flex items-center space-x-0.5 text-[10px] font-bold text-emerald-600">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>FairPlay</span>
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
