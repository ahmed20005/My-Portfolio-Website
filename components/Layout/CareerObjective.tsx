import React from 'react';
import { Card } from '../UI/Card';
import { Target } from 'lucide-react';

export const CareerObjective: React.FC = () => {
  return (
    <section className="w-full">
      <Card className="border-l-4 border-l-primary bg-zinc-50/50">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="p-3 rounded-full bg-white border border-zinc-200 shrink-0 shadow-sm">
            <Target className="w-6 h-6 text-primary" />
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary tracking-tight">Career Objective</h2>
            <p className="text-secondary leading-relaxed text-lg">
              Seeking a Data Engineering internship or entry-level position to leverage expertise in Python, SQL, and advanced Web Scraping techniques. My focus is on building robust data extraction pipelines and structured datasets to support data-driven decision-making in professional environments.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Python", "SQL", "Web Scraping", "Data Pipelines"].map((badge, i) => (
                <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-white border border-zinc-200 text-primary shadow-sm">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};