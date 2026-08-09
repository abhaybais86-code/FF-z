import React from 'react';
import { MessageSquare, Send, Instagram, Youtube, Disc as Discord } from 'lucide-react';

export const CommunitySection: React.FC = () => {
  const socials = [
    {
      name: 'WhatsApp',
      handle: 'Join Updates Group',
      icon: MessageSquare,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      link: 'https://whatsapp.com'
    },
    {
      name: 'Telegram',
      handle: '@ffarena',
      icon: Send,
      color: 'bg-sky-50 text-sky-600 border-sky-200',
      link: 'https://telegram.org'
    },
    {
      name: 'Instagram',
      handle: '@ffarena_official',
      icon: Instagram,
      color: 'bg-pink-50 text-pink-600 border-pink-200',
      link: 'https://instagram.com'
    },
    {
      name: 'YouTube',
      handle: 'FF Arena eSports',
      icon: Youtube,
      color: 'bg-rose-50 text-rose-600 border-rose-200',
      link: 'https://youtube.com'
    },
    {
      name: 'Discord',
      handle: 'Elite Lounge',
      icon: Discord,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
      link: 'https://discord.com'
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Pill */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs mb-4">
          Community
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-10">
          Join <span className="text-purple-gradient">50,000+ players</span> in the arena
        </h2>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {socials.map((s, idx) => {
            const Icon = s.icon;
            return (
              <a
                key={idx}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-slate-200/90 rounded-2xl p-4 flex items-center space-x-3 hover:shadow-md hover:border-purple-300 transition-all text-left group"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${s.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="font-extrabold text-slate-900 text-sm">
                    {s.name}
                  </div>
                  <div className="text-xs font-medium text-slate-500 truncate">
                    {s.handle}
                  </div>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};
