import React from 'react';
import { Briefcase, Cloud, Database } from 'lucide-react';

const experiences = [
  {
    role: "Data Engineering Trainee",
    org: "Microsoft DEPI Track",
    period: "Present",
    desc: "Selected for an intensive national scholarship program focused on end-to-end cloud data engineering solutions. Gaining hands-on experience with cutting-edge Microsoft Azure tools.",
    modules: [
      { title: "National Scholarship", desc: "Intensive program by MCIT.", icon: Briefcase },
      { title: "Azure Mastery", desc: "Data Factory & Synapse.", icon: Cloud },
      { title: "Hands-on Experience", desc: "Warehousing & Spark.", icon: Database },
    ]
  },
  {
    role: "Freelance Web Scraping",
    org: "Self-Employed",
    desc: "Developing custom scraping solutions for clients to extract business intelligence from online directories. Delivering high-quality, structured datasets."
  }
];

export const WorkExperience: React.FC = () => {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-semibold tracking-tight text-primary flex items-center gap-2">
        <Briefcase className="w-5 h-5 text-secondary" />
        Work Experience
      </h2>

      <div className="relative border-l border-zinc-200 ml-3 space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-8 md:pl-12">
            {/* Sensor Dot Animation (Blue) */}
            <span className="absolute -left-[5px] top-2 h-[10px] w-[10px] flex items-center justify-center z-10">
              <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-[10px] w-[10px] bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
            </span>
            
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-primary tracking-tight">{exp.role}</h3>
                  {exp.role === "Data Engineering Trainee" && (
                    <>
                      <img src="/Microsoft_Logo_512px.png" alt="Microsoft" className="h-5 w-auto object-contain" />
                      <img src="/DEPI_logo.png" alt="DEPI" className="h-5 w-auto object-contain" />
                    </>
                  )}
                </div>
                {exp.period && (
                  <span className="text-xs font-mono text-zinc-500 bg-zinc-100 px-2 py-1 rounded">
                    {exp.period}
                  </span>
                )}
              </div>
              <p className="text-sm font-medium text-secondary">{exp.org}</p>
              <p className="text-secondary/90 leading-relaxed max-w-2xl">
                {exp.desc}
              </p>

              {/* Specific Layout for DEPI (Grid) */}
              {exp.modules && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  {exp.modules.map((mod, i) => (
                    <div key={i} className="p-4 rounded-lg bg-zinc-50 border border-zinc-200">
                      <mod.icon className="w-4 h-4 text-secondary mb-2" />
                      <div className="text-sm font-medium text-primary">{mod.title}</div>
                      <div className="text-xs text-secondary mt-1">{mod.desc}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};