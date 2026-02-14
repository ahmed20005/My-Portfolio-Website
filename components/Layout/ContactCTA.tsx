import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  return (
    <section className="py-12 md:py-20 flex flex-col items-center text-center space-y-8 relative overflow-hidden rounded-3xl bg-zinc-50 border border-zinc-200">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      
      <div className="relative z-10 space-y-4 max-w-2xl px-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-primary">Ready to Connect?</h2>
        <p className="text-lg text-secondary leading-relaxed">
          I am eager to apply my skills and passion for data engineering in a dynamic professional environment. Whether it's building robust pipelines, cleaning complex datasets, or contributing to data-driven strategies.
        </p>
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row gap-4 pt-4">
        <a 
          href="https://www.linkedin.com/in/ahmed-adel-dataeng" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-8 py-4 bg-primary text-background rounded-xl font-semibold hover:bg-zinc-800 transition-colors shadow-lg shadow-black/5"
        >
          <Linkedin className="w-5 h-5" />
          View My LinkedIn
        </a>
        <a 
          href="mailto:ahmedelsheriff0@gmail.com"
          className="flex items-center gap-2 px-8 py-4 bg-white border border-zinc-200 text-primary rounded-xl font-semibold hover:bg-zinc-50 transition-colors"
        >
          <Mail className="w-5 h-5" />
          Send an Email
        </a>
      </div>

      <p className="relative z-10 text-sm text-secondary/60 italic font-medium pt-4">
        "Let's build the future of data together!"
      </p>
    </section>
  );
};