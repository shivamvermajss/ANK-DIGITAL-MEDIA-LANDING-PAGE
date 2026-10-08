import React from 'react';
import { Star } from 'lucide-react';

/**
 * HeroSocialProof Component
 * Recreates the exact avatar cluster, 5-star rating, and trust copy from the reference image:
 * [AK] [NX] [TS] [WD] ★★★★★ Built for ambitious brands / Enterprise-grade engineering standards
 */
export function HeroSocialProof() {
  return (
    <div className="flex items-center gap-3 sm:gap-3.5 select-none pt-1">
      {/* 4 Avatar Badges (AK, NX, TS, WD) */}
      <div className="flex -space-x-2 shrink-0">
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-purple-700 to-indigo-600 text-white font-heading font-extrabold text-[9px] sm:text-[10px] flex items-center justify-center ring-2 ring-white shadow-xs">
          AK
        </div>
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-blue-600 text-white font-heading font-extrabold text-[9px] sm:text-[10px] flex items-center justify-center ring-2 ring-white shadow-xs">
          NX
        </div>
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-blue-600 to-sky-500 text-white font-heading font-extrabold text-[9px] sm:text-[10px] flex items-center justify-center ring-2 ring-white shadow-xs">
          TS
        </div>
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-sky-500 to-cyan-400 text-white font-heading font-extrabold text-[9px] sm:text-[10px] flex items-center justify-center ring-2 ring-white shadow-xs">
          WD
        </div>
      </div>

      {/* Star Rating & Credibility Statement */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          {/* 5 Gold Stars */}
          <div className="flex items-center text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
            ))}
          </div>
          <span className="font-heading font-bold text-xs sm:text-sm text-slate-900 tracking-tight">
            Built for ambitious brands
          </span>
        </div>
        <span className="text-[10px] sm:text-[11px] text-slate-500 font-sans tracking-tight">
          Enterprise-grade engineering standards
        </span>
      </div>
    </div>
  );
}
