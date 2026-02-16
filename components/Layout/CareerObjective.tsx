import React from 'react';
import { Sparkles } from 'lucide-react';

export const USPCard: React.FC = () => {
  return (
    <section className="w-full">
      <div className="relative overflow-hidden rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] p-8 md:p-10">
        {/* Subtle gradient overlay for glass effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-zinc-100/30 pointer-events-none" />

        <div className="relative flex flex-col md:flex-row gap-6 items-start">
          {/* Icon with glass effect */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100/50 border border-teal-200/50 shrink-0 shadow-[0_4px_20px_rgba(20,184,166,0.15)]">
            <Sparkles className="w-8 h-8 text-teal-600" />
          </div>

          <div className="space-y-4 flex-1">
            <h2 className="text-2xl font-bold text-primary tracking-tight">
              What Sets Me Apart
            </h2>
            <p className="text-secondary leading-relaxed text-lg md:text-xl">
              I deliver precise, automated data solutions by combining advanced web scraping techniques with a resource-efficient, Linux-optimized workflow to turn complex raw data into actionable assets.
            </p>

            {/* Key highlights */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                { label: "Precise", classes: "bg-teal-50/80 border-teal-200/50 text-teal-700" },
                { label: "Automated", classes: "bg-blue-50/80 border-blue-200/50 text-blue-700" },
                { label: "Linux-Optimized", classes: "bg-emerald-50/80 border-emerald-200/50 text-emerald-700" }
              ].map((item, i) => (
                <span
                  key={i}
                  className={`px-4 py-2 text-sm font-medium rounded-full border backdrop-blur-sm ${item.classes}`}
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
