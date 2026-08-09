import React from 'react';
import { REVIEWS } from '../data/mockData';
import { Star, CheckCircle2, Trophy } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs mb-4">
          Verified players
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-12">
          Real players. <span className="text-purple-gradient">Real winnings.</span>
        </h2>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-50/70 border border-slate-200/90 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:bg-white hover:border-purple-200 hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* User Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-11 h-11 rounded-2xl ${rev.avatarColor} text-white font-extrabold flex items-center justify-center text-base shadow-xs`}>
                    {rev.name[0]}
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <h4 className="font-extrabold text-slate-900 text-base">
                        {rev.name}
                      </h4>
                      {rev.verified && (
                        <CheckCircle2 className="w-4 h-4 text-purple-600 fill-purple-100" />
                      )}
                    </div>
                    <span className="text-xs font-medium text-slate-500">
                      {rev.location}
                    </span>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center space-x-1 text-amber-400 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-700 text-sm font-medium leading-relaxed mb-6">
                  "{rev.text}"
                </p>
              </div>

              {/* Footer Cash Won Badge */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Total Cash Won
                </span>
                <span className="inline-flex items-center space-x-1 text-sm sm:text-base font-black text-emerald-600 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-xl">
                  <Trophy className="w-3.5 h-3.5 fill-emerald-500/20" />
                  <span>₹{rev.cashWon.toLocaleString('en-IN')}</span>
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
