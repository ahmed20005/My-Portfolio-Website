import React from 'react';
import { Sparkles } from 'lucide-react';

export const USPCard: React.FC = () => {
  return (
    <section className="w-full">
      <div className="relative overflow-hidden rounded-3xl">
        {/* Background blur effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-zinc-100/30 backdrop-blur-[20px]" />
        
        {/* Glass card border and background */}
        <div className="relative border border-white/60 bg-white/10 backdrop-blur-xl p-8 md:p-10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1),inset_0_0_0_1px_rgba(255,255,255,0.4)]">
          {/* Inner subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-zinc-50/20 pointer-events-none rounded-3xl" />
          
          <div className="relative flex flex-col md:flex-row gap-6 items-start">
            {/* Icon with glass effect */}
            <div className="p-4 rounded-2xl bg-white/30 border border-white/50 shrink-0 shadow-[0_4px_20px_rgba(0,0,0,0.05)] backdrop-blur-sm">
              <Sparkles className="w-8 h-8 text-teal-600" />
            </div>
            
            <div className="space-y-4 flex-1">
              <h2 className="text-2xl font-bold text-zinc-800 tracking-tight">
                What Sets Me Apart
              </h2>
              <p className="text-zinc-600 leading-relaxed text-lg md:text-xl">
                I deliver precise, automated data solutions by combining advanced web scraping techniques with a resource-efficient, Linux-optimized workflow to turn complex raw data into actionable assets.
              </p>
              
              {/* Key highlights */}
              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  { label: "Precise", color: "bg-teal-100/70 text-teal-700 border-teal-200/50" },
                  { label: "Automated", color: "bg-blue-100/70 text-blue-700 border-blue-200/50" },
                  { label: "Linux-Optimized", color: "bg-emerald-100/70 text-emerald-700 border-emerald-200/50" }
                ].map((item, i) => (
                  <span 
                    key={i} 
                    className={`px-4 py-2 text-sm font-medium rounded-full border backdrop-blur-sm ${item.color}`}
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
