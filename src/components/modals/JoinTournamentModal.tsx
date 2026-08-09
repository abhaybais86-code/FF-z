import React from 'react';
import { Tournament } from '../../types';
import { X, Trophy, ShieldCheck, Download, Smartphone, Zap } from 'lucide-react';

interface JoinTournamentModalProps {
  tournament: Tournament | null;
  isOpen: boolean;
  onClose: () => void;
  onDownloadApp: () => void;
}

export const JoinTournamentModal: React.FC<JoinTournamentModalProps> = ({
  tournament,
  isOpen,
  onClose,
  onDownloadApp
}) => {
  if (!isOpen || !tournament) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs" onClick={onClose} />

      <div className="relative bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 z-10 animate-in zoom-in-95 duration-200 text-slate-900">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Icon */}
        <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-4 border border-purple-200 shadow-xs">
          <Smartphone className="w-7 h-7" />
        </div>

        {/* Modal Title */}
        <h3 className="text-xl sm:text-2xl font-black text-center text-slate-900 tracking-tight mb-2">
          Install App to Join & Play
        </h3>

        <p className="text-slate-600 text-xs sm:text-sm text-center font-medium leading-relaxed mb-6">
          To enter <strong className="text-slate-900">{tournament.title}</strong> and receive match credentials, install the official <strong className="text-purple-600">FF Arena Android App</strong>.
        </p>

        {/* Selected Match Summary */}
        <div className="bg-slate-950 text-white rounded-2xl p-4 mb-6 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
            <span className="text-purple-400 font-extrabold uppercase tracking-wider text-[10px]">SELECTED MATCH</span>
            <span className="flex items-center space-x-1 text-emerald-400 font-bold text-[10px]">
              <ShieldCheck className="w-3 h-3" />
              <span>{tournament.mode}</span>
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-center pt-1">
            <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800">
              <div className="text-[10px] text-slate-400 font-bold uppercase">ENTRY FEE</div>
              <div className="text-base font-black text-white mt-0.5">₹{tournament.entryFee}</div>
            </div>

            <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800">
              <div className="text-[10px] text-slate-400 font-bold uppercase">PRIZE POOL</div>
              <div className="text-base font-black text-amber-400 mt-0.5">₹{tournament.prizePool.toLocaleString('en-IN')}</div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="space-y-3">
          <button
            onClick={() => {
              onClose();
              onDownloadApp();
            }}
            className="w-full py-3.5 px-6 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-extrabold text-sm sm:text-base tracking-wide shadow-xl shadow-slate-950/20 active:scale-95 transition-all flex items-center justify-center space-x-2.5 border border-slate-800 group"
          >
            <Download className="w-5 h-5 text-purple-400 group-hover:animate-bounce" />
            <span>INSTALL APP TO PLAY ⚡</span>
          </button>

          <button
            onClick={onClose}
            className="w-full py-2.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
          >
            Cancel & Continue Browsing
          </button>
        </div>

        {/* Bottom Security Note */}
        <div className="mt-4 pt-3 border-t border-slate-100 text-center text-[11px] font-semibold text-slate-400 flex items-center justify-center space-x-1">
          <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          <span>Instant Match Details & 2-Second UPI Withdrawals on App</span>
        </div>

      </div>
    </div>
  );
};

