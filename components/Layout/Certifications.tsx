import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

const certs = [
  { title: "Data Engineering Pathway", issuer: "DEPI", date: "2024 – Present", status: "In Progress" },
  { title: "Joining Data in SQL", issuer: "DataCamp", date: "July 2024", status: "Completed" },
  { title: "Intermediate SQL", issuer: "DataCamp", date: "April 2024", status: "Completed" },
  { title: "Introduction to SQL", issuer: "DataCamp", date: "April 2024", status: "Completed" },
];

export const Certifications: React.FC = () => {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-semibold tracking-tight text-primary flex items-center gap-2">
        <Award className="w-5 h-5 text-secondary" />
        Certifications
      </h2>
      
      <div className="relative border-l border-zinc-200 ml-3 space-y-8 py-2">
        {certs.map((cert, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0.5, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative pl-8"
          >
            {/* Sensor Dot Animation (Green) */}
            <span className="absolute -left-[5px] top-1.5 h-[10px] w-[10px] flex items-center justify-center z-10">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-[10px] w-[10px] bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
            </span>
            
            <div className="flex items-center justify-between group">
              <div>
                <h3 className="font-medium text-primary group-hover:text-blue-500 transition-colors">{cert.title}</h3>
                <p className="text-sm text-secondary">{cert.issuer}</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-zinc-400 block">{cert.date}</span>
                {cert.status === "Completed" && (
                  <div className="flex items-center justify-end gap-1 mt-1 text-emerald-600">
                    <CheckCircle2 size={12} />
                    <span className="text-[10px] font-medium uppercase tracking-wider">Verified</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};