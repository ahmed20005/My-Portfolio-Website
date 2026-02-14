import React from 'react';
import { Card } from '../UI/Card';
import { GraduationCap } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section>
      <Card>
        <div className="flex flex-col gap-6">
          {/* Header Bar: Grey Box containing Icon + Title */}
          <div className="flex items-center gap-4 px-6 py-4 bg-zinc-50 rounded-2xl border border-zinc-100 w-full">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-semibold tracking-tight text-primary">Education</h2>
          </div>
          
          <div className="space-y-2 px-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <img src="/helwan_university_logo.jpeg" alt="Helwan National University" className="h-8 w-auto object-contain rounded-full" />
                <h3 className="text-xl font-semibold text-primary tracking-tight">Helwan National University</h3>
              </div>
              <span className="text-sm font-mono text-zinc-500">Oct 2022 – Present</span>
            </div>
            <p className="text-base text-primary font-medium">Bachelor of Science in Computer Science and Artificial Intelligence</p>
            <p className="text-sm text-secondary">Current Status: <span className="text-emerald-500 font-medium">Third Year Student</span></p>
            
            <div className="pt-4 mt-4 border-t border-zinc-100">
              <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-2">Relevant Coursework</p>
              <p className="text-sm text-secondary leading-relaxed">
                Data Structures, DBMS, Algorithms, AI, Big Data Analytics
              </p>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};