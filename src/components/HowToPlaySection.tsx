import React from 'react';
import { Download, UserPlus, Gamepad2, Trophy, Check, X } from 'lucide-react';

export const HowToPlaySection: React.FC = () => {
  const steps = [
    {
      num: 1,
      icon: Download,
      title: 'Download App',
      desc: 'Install FF Arena directly from our secure website in seconds.'
    },
    {
      num: 2,
      icon: UserPlus,
      title: 'Create Account',
      desc: 'Sign up quickly with mobile verification and set your profile.'
    },
    {
      num: 3,
      icon: Gamepad2,
      title: 'Join Contest',
      desc: 'Pick your game mode, pay entry fees, and enter the Match Lobby.'
    },
    {
      num: 4,
      icon: Trophy,
      title: 'Win & Withdraw',
      desc: 'Compete fairly, secure top ranking, and withdraw cash to UPI instantly.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs mb-4">
            How it works
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-2">
            How To Play
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Begin Your Game Now
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="bg-white border border-slate-200/90 rounded-3xl p-6 relative shadow-xs hover:border-purple-300 transition-all text-center flex flex-col items-center"
              >
                {/* Step Number Badge */}
                <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-slate-900 text-white font-black text-xs flex items-center justify-center">
                  {s.num}
                </div>

                <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center mb-5 shadow-2xs">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                  {s.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* COMPARISON CARD: "The unfair advantage other platforms don't offer" */}
        <div className="max-w-3xl mx-auto bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-lg">
          
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              The unfair advantage other platforms don't offer
            </h3>
          </div>

          {/* FF Arena Box */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-6">
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-extrabold text-lg text-slate-900">FF Arena</span>
              <span className="text-[10px] font-extrabold bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full border border-purple-200">
                Recommended
              </span>
            </div>

            <ul className="space-y-3">
              {[
                'FairPlay Matchmaking System',
                'Instant 2s Wallet Withdrawals',
                '100% Real Skill Matches',
                'Segregated User Wallets',
                '24×7 Premium WhatsApp Support',
                'Daily Cash Championships'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-xs sm:text-sm font-bold text-slate-800">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* OTHER PLATFORMS Box */}
          <div className="p-4 rounded-2xl bg-rose-50/40 border border-rose-100">
            <div className="text-xs font-extrabold uppercase tracking-wider text-rose-800/80 mb-3">
              OTHER PLATFORMS
            </div>

            <ul className="space-y-2.5">
              {[
                'Delayed/Manual Withdrawals',
                'Bots/Smurfs Allowed in Lobbies',
                'Unresponsive customer service',
                'Unstable tournament room setups',
                'Complicated wallet limits',
                'High hidden transaction fees'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-xs font-semibold text-slate-600">
                  <div className="w-4 h-4 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                    <X className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
