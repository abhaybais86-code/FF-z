import React from 'react';
import { Target, Zap, ShieldCheck, Gift, Trophy, Headphones } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Skill-Based Room Allocation',
      desc: 'Smart opponent grouping ensures balanced, competitive lobbies tailored to player skill levels.'
    },
    {
      icon: Zap,
      title: 'Express Payout System',
      desc: 'Direct wallet & UPI transfer options dispatch match winnings in under 2 minutes.'
    },
    {
      icon: ShieldCheck,
      title: 'Vault-Grade Security',
      desc: 'End-to-end encrypted balance protection with bank-grade segregated nodal accounts.'
    },
    {
      icon: Gift,
      title: 'Partner & Referral Perks',
      desc: 'Invite team members and earn rewards on every tournament match they complete.'
    },
    {
      icon: Trophy,
      title: 'Continuous Championships',
      desc: 'Daily esports tournaments, 1v1 duels, and weekly championship showdowns.'
    },
    {
      icon: Headphones,
      title: 'Direct Support Desk',
      desc: 'Dedicated assistance via 24×7 live WhatsApp chat and in-app ticket desk.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-xs font-bold text-purple-700 mb-4">
          Why Arena Players Thrive Here
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
          Engineered for <span className="text-purple-gradient">Fair & Fast Gameplay</span>
        </h2>

        {/* Subheading */}
        <p className="max-w-2xl mx-auto text-slate-600 text-sm sm:text-base font-medium mb-12">
          A platform built around integrity, performance, and seamless user experience.
        </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50/60 border border-slate-200/90 rounded-3xl p-6 sm:p-7 hover:bg-white hover:shadow-lg hover:border-purple-200 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 text-purple-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-2xs">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
